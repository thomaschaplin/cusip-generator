<img src="assets/logo.png" alt="logo" width="201" height="245" />

# cusip-generator

cusip-generator is a [Node.js](https://nodejs.org/en/) library to generate
random CUSIP with a single API.

CUSIP stands for Committee on Uniform Securities Identification Procedures. A
CUSIP number identifies most financial instruments, including: stocks of all
registered U.S. and Canadian companies, commercial paper, and U.S. government
and municipal bonds.

## Usage

`npm i @thomaschaplin/cusip-generator`

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
import { generateCusip } from '@thomaschaplin/cusip-generator')
console.log(generateCusip()) // 112091HZ9
```

## Setup

Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine

### Development

#### Installation

- Clone this repository
  `git clone git@github.com:thomaschaplin/cusip-generator.git`
- Change directory `cd cusip-generator`
- Install the dependencies `npm install`
- Transpile the code `npm run build` or `npm run watch`

#### Tests

- Run the tests `npm test`
- Run the tests with coverage `npm run test:coverage`

## License

[MIT](./LICENSE)

---

[Logo](https://www.clipartkey.com/view/iwiixw_yes-we-offer-both-short-term-interest-free/) graphic by <a href="https://www.clipartkey.com/upic/1115/">Perlenfuerdiehunde</a> from ClipArtKey.
