# cusip-generator
![npm (scoped)](https://img.shields.io/npm/v/@thomaschaplin/cusip-generator)
[![GitHub issues](https://img.shields.io/github/issues/thomaschaplin/cusip-generator)](https://github.com/thomaschaplin/cusip-generator/issues)
[![GitHub forks](https://img.shields.io/github/forks/thomaschaplin/cusip-generator)](https://github.com/thomaschaplin/cusip-generator/network)
[![GitHub stars](https://img.shields.io/github/stars/thomaschaplin/cusip-generator)](https://github.com/thomaschaplin/cusip-generator/stargazers)
[![GitHub license](https://img.shields.io/github/license/thomaschaplin/cusip-generator)](https://github.com/thomaschaplin/cusip-generator/blob/master/LICENSE)

Generate a random CUSIP

CUSIP stands for Committee on Uniform Securities Identification Procedures. A CUSIP number identifies most financial instruments, including: stocks of all registered U.S. and Canadian companies, commercial paper, and U.S. government and municipal bonds.

## Install

`npm i @thomaschaplin/cusip-generator`

## Usage

### ES5
```js
const generateCusip = require('@thomaschaplin/cusip-generator')
console.log(generateCusip.generateCusip()) // 327492T38
```

or

```js
const { generateCusip } = require('@thomaschaplin/cusip-generator')
console.log(generateCusip()) // 5519069J1
```

### ES6

```js
import { generateCusip } from '@thomaschaplin/cusip-generator')
console.log(generateCusip()) // 112091HZ9
```

## License 
[MIT](./LICENSE)