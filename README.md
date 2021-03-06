# bruteforcejs :heart:

> A JavaScript bruteforcing module

## :package: Install

Install with NPM: `npm i bruteforcejs`

## :clipboard: Usage

### Import

```javascript
const bruteforce = require("bruteforcejs")
```

### Syntax

#### bruteforce(`characters [string|string[]]`, (result) => {})

##### Example
```javascript
bruteforce('characters [list or string]', (result) => {
  // Do something with result
  if(result == "right") return true // Finish the bruteforce
}, 5) // Maxlenght (if this is not set the bruteforce will continue until cancled)
```

### Bruteforce until callback returns true (characters => string)

```javascript
bruteforce("ABCabc", result => {
  console.log(result) // Display current bruteforce string
  if (result == "abBac") {
    // If current bruteforce string is right
    return true // Return true => finish bruteforce
  }
})
```

### Bruteforce until callback returns true (characters => list)

```javascript
bruteforce(["A", "B", "C", "a", "b", "c"], result => {
  console.log(result) // Display current bruteforce string
  if (result == "abBac") {
    // If current bruteforce string is right
    return true // Return true => finish bruteforce
  }
})
```

### Bruteforce until maxLength is hit or callback returns true (characters => string)

```javascript
bruteforce(
  "ABCabc",
  result => {
    console.log(result) // Display current bruteforce string
    if (result == "abBac") {
      // If current bruteforce string is right
      return true // Return true => finish bruteforce
    }
  },
  5
)
```

### Bruteforce until maxLength is hit or callback returns true (characters => list)

```javascript
bruteforce(
  ["A", "B", "C", "a", "b", "c"],
  result => {
    console.log(result) // Display current bruteforce string
    if (result == "abBac") {
      // If current bruteforce string is right
      return true // Return true => finish bruteforce
    }
  },
  5
)
```

---

> [Website](https://marvinjwendt.com) &nbsp;&middot;&nbsp;
> GitHub [@MarvinJWendt](https://github.com/MarvinJWendt)
