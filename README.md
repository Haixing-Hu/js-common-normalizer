# @qubit-ltd/common-normalizer

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/common-normalizer.svg)](https://npmjs.com/package/@qubit-ltd/common-normalizer)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-common-normalizer/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-common-normalizer/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-common-normalizer/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-common-normalizer?branch=master)

[@qubit-ltd/common-normalizer] is a JavaScript ES6 library of common field 
normalizers.

## <span id="installation">Installation</span>

Install with npm:

```bash
npm install @qubit-ltd/common-normalizer
```

Or with yarn:

```bash
yarn add @qubit-ltd/common-normalizer
```

## <span id="usage">Usage</span>

This library provides various functions for normalizing different types of data:

```javascript
import {
  normalizeBool,         // normalize boolean values
  normalizeInteger,      // normalize integers
  normalizeDate,         // normalize dates
  normalizeDateTime,     // normalize date-time
  normalizeTime,         // normalize time
  normalizeTimestamp,    // normalize timestamps
  Normalizer,            // Normalizer class
} from '@qubit-ltd/common-normalizer';

// Normalize boolean values
const boolResult = normalizeBool('true');  // returns true
const boolResult2 = normalizeBool('');     // returns null

// Normalize integers
const intResult = normalizeInteger('123'); // returns 123
const intResult2 = normalizeInteger('');   // returns null

// Using the Normalizer class
const normalizer = new Normalizer();
normalizer.bool('isActive');          // normalizes isActive field to boolean
normalizer.integer('count');          // normalizes count field to integer
normalizer.date('birthDate');         // normalizes birthDate field to date
```

For more detailed usage examples, please refer to the API documentation.

## <span id="api">API Documentation</span>

Full API documentation can be found at the [project documentation site](https://haixing-hu.github.io/js-common-normalizer/).

## <span id="contributing">Contributing</span>

If you find any issues or have suggestions for improvements, please feel free
to open an issue or submit a pull request to the [GitHub repository].

## <span id="license">License</span>

[@qubit-ltd/common-normalizer] is distributed under the Apache 2.0 license.
See the [LICENSE](LICENSE) file for more details.

[@qubit-ltd/common-normalizer]: https://npmjs.com/package/@qubit-ltd/common-normalizer
[GitHub repository]: https://github.com/Haixing-Hu/js-common-normalizer
