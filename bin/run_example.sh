#!/usr/bin/env bash

script_name=$( basename "$0" )
script_version="0.0.2"
usage="Usage: ${script_name} [-v|--version|-h|--help]"

# Parse the command line parameters
while [[ $# -gt 0 ]]
do
    param="$1"
    case "${param}" in
        -v|--version)
            echo "${script_name}" version ${script_version}
            exit 0
            ;;
        -h|--help)
            show_help=1
            shift
            ;;
        *)
            echo "${script_name}": unknown option "${param}"
            echo "${usage}"
            exit 0
            ;;
    esac
done

# Show the help screen
if [[ ${show_help} -eq 1 ]]
then
    echo "${usage}"
    echo "With no parameters, when run in an exercise directory, "
    echo "this script will modify the example.js and *.spec.js files"
    echo "so that Jest tests can be run on the example.  The script"
    echo "should then restore the directory to its original state."
    echo "The intended use is to automate the process of making sure"
    echo "an exercise still passes the tests before submitting changes."
    echo
    echo "Options:"
    echo "  -h, --help                    display this help and exit"
    echo "  -v, --version                 display the version number and exit"
    exit 0
fi

if [ ! -f example.js ]
then
    echo "Example file not found."
    exit 0
fi

(( spec_files_count = $( ls | grep -c .spec.js ) ))

if [ ${spec_files_count} -eq 0 ]
then
    echo "No test file found."
    exit 0
elif [ ${spec_files_count} -gt 1 ]
then
    echo "More than one test file found"
    exit 0
fi

# To-do: this will probably fail if Jest is globally installed
# instead of locally.
jest_bin="../../node_modules/.bin/jest"
spec_file=$( ls *.spec.js )
tmp_spec_file="tmp-${spec_file}"
js_file=${spec_file//.spec./.}
sed 's/  xtest/test/g' "${spec_file}" > "${tmp_spec_file}"
cp example.js ${js_file}
"${jest_bin}" "${tmp_spec_file}"
rm ${js_file}
rm "${tmp_spec_file}"

exit 0
