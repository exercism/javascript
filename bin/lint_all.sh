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
    echo "With no parameters, hides .eslintignore and runs ESLint."
    echo "Errors are sent to errors.txt and .eslintignore is"
    echo "restored afterwards."
    echo
    echo "Options:"
    echo "  -h, --help                    display this help and exit"
    echo "  -v, --version                 display the version number and exit"
    exit 0
fi

if [ ! -f .eslintignore ]
then
     echo ".eslintignore file not found.  Are you in the root directory?"
     exit 1
fi

mv .eslintignore .eslintignore.temp
npx eslint . > errors.txt 2> /dev/null

# TO-DO - what happens here if Node or ESLint are not installed
#   or `npx` does not run for any other reason?

if [ ! -z  $? ]
then
    echo "ESLint errors detected.  See the file errors.txt for details."
fi

mv .eslintignore.temp .eslintignore
