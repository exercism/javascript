#!/usr/bin/env bash

script_name=$( basename "$0" )
script_version="0.0.2"
usage1="Please enter a single valid 32-character uuid number or option."
usage2="Usage: ${script_name} [-v|--version|-h|--help|UUID]"
uuid=""

# Parse the command line parameters
if [[ $# -ne 1 ]]
then
    echo "${usage1}"
    echo "${usage2}"
    exit 0
else
    param="$1"
    case "${param}" in
        -v|--version)
            echo "${script_name}" version "${script_version}"
            exit 0
            ;;
        -h|--help)
            show_help=1
            shift
            ;;
        *)
            if [[ ${#param} -eq 32 ]]
            then
                uuid="${param}"
            else
                echo "${script_name}": unknown option "${param}"
                echo "${usage2}"
                exit 1
            fi
            ;;
    esac
fi

# Show the help screen
if [[ ${show_help} -eq 1 ]]
then
    echo "${usage}"
    echo "Given a valid UUID code, this script will attempt to download that"
    echo "student submission, switch to that directory, uncomment all tests"
    echo "from the spec file, create a symlink to a node_modules folder, and"
    echo "run the units tests on that file."
    echo
    echo "Options:"
    echo "  -h, --help                    display this help and exit"
    echo "  -v, --version                 display the version number and exit"
    exit 0
fi

# This if block may not strictly be necessary(?)
if [[ ! "${#uuid}" -eq 32 ]]
then
    echo "${usage}"
    echo "Please enter a valid 32-character uuid number."
    exit 1
fi

# Try to download the file and report any errors.
# Currently this does not catch all the output from
# the Exercism program as it is supposed to.
download_dir="$( exercism download --uuid=${uuid} )"
download_status=$?

if [[ ${download_status} -eq 255 ]]
then
    echo "Solution not found"
    exit 1
elif [[ ${download_status} -ne 0 ]]
then
    echo "Download attempted aborted with error code ${download_status}"
    exit 1
fi

# If we got this far, we now need to:
#     - move to the correct folder
#     - unlock all tests from the .spec.js file
#     - create  link to a node_modules folder in root users/ folder
#     - runs the tests with a locally-installed instance of Jest.
# For this to work, the script makes a lot of assumptions about the users
# set-up that it does not currently verify.
cd "${download_dir}"
test_file=$( basename "${download_dir}" ).spec.js
sed -i -e 's/xtest/test/g' "${test_file}"
ln -s ../../../node_modules/
./node_modules/.bin/jest "${test_file}"
