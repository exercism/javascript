#!/usr/bin/env node
const fs = require('fs')

// Helpers
const availables_options = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x'  // match entire line 
];

const does_line_matche_pattern = (line, pattern) => {
  let left = line;
  let right = pattern;

  if (is_option_set('i')) {
    left = line.toLowerCase()
    right = pattern.toLowerCase()
  }

  if (is_option_set('x')) {
    return left === right;
  }

  return left.match(right) !== null;

}

const getConfigFromArgs = () => {
  const config = {
    'pattern': '',
    'options': [],
    'files': []
  };

  let has_pattern_been_found = false;

  process.argv.slice(2).forEach(val => {
    if (has_pattern_been_found) {
      config.files.push(val)
    } else if (val.indexOf('-') !== -1) {
      const option = val.replace('-', '')

      if (!availables_options.includes(option)) {
        throw new Error(`Unknown option ${option}`)
      }

      config.options.push(option)
    } else {
      has_pattern_been_found = true
      config.pattern = val
    }
  })

  return config;
}

const config = getConfigFromArgs()
const is_option_set = option => config.options.includes(option);

// Actual script
config.files.forEach(file => {
  const data = fs.readFileSync(file, { encoding: 'utf-8' })

  if (is_option_set('l')) {
    data.split('\n').find(line => {
      const does_line_match_pattern = does_line_matche_pattern(line, config.pattern)
      
      return is_option_set('v') ? !does_line_match_pattern : does_line_match_pattern
    }) && console.log(file)
  } else {
    data.split('\n').forEach((line, index) => {
      let result = '';
      let should_output_line = does_line_matche_pattern(line, config.pattern);
  
      if (is_option_set('v')) {
        should_output_line = !should_output_line;
      }
     
      if (should_output_line) {
        if (config.files.length > 1) {
          result += `${file}:`
        }

        if (is_option_set('n')) {
          result += `${index+1}:`;
        }
  
        result += line;
  
        console.log(result)
      }
    })
  }
});
