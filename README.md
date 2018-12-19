# bruteforcejs :heart:

> A JavaScript bruteforcing module

## :package: Install

Install with NPM: `npm i bruteforcejs`

## :clipboard: Usage

### Import

    const bruteforce = require('bruteforcejs')

### Syntax

    bruteforce('characters [list or string]', (result) => {
      // Do something with result
      if(/** RESULT WAS RIGHT **/) return true //Finish the bruteforce
    }, 5) // (maxLength < 1 | maxLength = undefined) => until callback returns true (standard)

### Bruteforce until callback returns true (characters => string)

    bruteforce('ABCabc', (result) => {
        console.log(result) // Display current bruteforce string
        if (result == 'abBac') { // If current bruteforce string is right
          return true // Return true => finish bruteforce
        }
     })

### Bruteforce until callback returns true (characters => list)

    bruteforce(['A', 'B', 'C', 'a', 'b', 'c'], (result) => {
        console.log(result) // Display current bruteforce string
        if (result == 'abBac') { // If current bruteforce string is right
          return true // Return true => finish bruteforce
        }
     })

### Bruteforce until maxLength is hit or callback returns true (characters => string)

    bruteforce('ABCabc', (result) => {
        console.log(result) // Display current bruteforce string
        if (result == 'abBac') { // If current bruteforce string is right
          return true // Return true => finish bruteforce
        }
     }, 5)

### Bruteforce until maxLength is hit or callback returns true (characters => list)

    bruteforce(['A', 'B', 'C', 'a', 'b', 'c'], (result) => {
        console.log(result) // Display current bruteforce string
        if (result == 'abBac') { // If current bruteforce string is right
          return true // Return true => finish bruteforce
        }
     }, 5)

---

> [Website](https://marvinjwendt.com) &nbsp;&middot;&nbsp;
> GitHub [@MarvinJWendt](https://github.com/MarvinJWendt)
