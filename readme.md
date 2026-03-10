<img src="assets/logo.png" alt="logo" width="201" height="245" />

[![npm version](https://badge.fury.io/js/%40thomaschaplin%2Fcusip-generator.svg)](https://badge.fury.io/js/%40thomaschaplin%2Fcusip-generator)

# cusip-generator

cusip-generator is a [Node.js](https://nodejs.org/en/) library to generate
random CUSIP with a single API.

CUSIP stands for Committee on Uniform Securities Identification Procedures. A
CUSIP number identifies most financial instruments, including: stocks of all
registered U.S. and Canadian companies, commercial paper, and U.S. government
and municipal bonds.

**CUSIP format (9 characters):**
- Characters 1–6: Issuer code (base-ten digits)
- Characters 7–8: Issue number (alphanumeric)
- Character 9: Check digit (computed via checksum algorithm)

## Usage

```bash
npm i @thomaschaplin/cusip-generator
```

### Example Usage

#### ES5

```js
const generateCusip = require("@thomaschaplin/cusip-generator");
console.log(generateCusip.generateCusip()); // 327492T38
```

or

```js
const { generateCusip } = require("@thomaschaplin/cusip-generator");
console.log(generateCusip()); // 5519069J1
```

#### ES6

```js
import { generateCusip } from '@thomaschaplin/cusip-generator'
console.log(generateCusip()) // 112091HZ9
```

#### TypeScript

```ts
import { generateCusip } from '@thomaschaplin/cusip-generator'
const cusip: string = generateCusip()
console.log(cusip) // e.g., 112091HZ9
```

## Setup

Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine

### Development

#### Installation

- Clone this repository
  ```bash
  git clone git@github.com:thomaschaplin/cusip-generator.git
  ```
- Change directory
  ```bash
  cd cusip-generator
  ```
- Install the dependencies
  ```bash
  npm install
  ```
- Transpile the code
  ```bash
  npm run build
  ```
  or
  ```bash
  npm run watch
  ```

#### Tests

- Run the tests
  ```bash
  npm test
  ```
- Run the tests with coverage
  ```bash
  npm run test:coverage
  ```
- Run mutation tests
  ```bash
  npm run test:mutation
  ```

## License

[MIT](./LICENSE)

---

[Logo](https://www.clipartkey.com/view/iwiixw_yes-we-offer-both-short-term-interest-free/) graphic by <a href="https://www.clipartkey.com/upic/1115/">Perlenfuerdiehunde</a> from ClipArtKey.
