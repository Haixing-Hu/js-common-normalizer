# @qubit-ltd/common-normalizer

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/common-normalizer.svg)](https://npmjs.com/package/@qubit-ltd/common-normalizer)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English Document](https://img.shields.io/badge/Document-English-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-common-normalizer/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-common-normalizer/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-common-normalizer/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-common-normalizer?branch=master)

[@qubit-ltd/common-normalizer] 是一个用于规范化常见字段的JavaScript ES6库。

## <span id="installation">安装</span>

使用npm安装：

```bash
npm install @qubit-ltd/common-normalizer
```

或者使用yarn安装：

```bash
yarn add @qubit-ltd/common-normalizer
```

## <span id="usage">使用方法</span>

此库提供了多种用于规范化不同类型数据的函数：

```javascript
import {
  normalizeBool,         // 规范化布尔值
  normalizeInteger,      // 规范化整数
  normalizeDate,         // 规范化日期
  normalizeDateTime,     // 规范化日期时间
  normalizeTime,         // 规范化时间
  normalizeTimestamp,    // 规范化时间戳
  Normalizer,            // 规范化器类
} from '@qubit-ltd/common-normalizer';

// 规范化布尔值
const boolResult = normalizeBool('true');  // 返回 true
const boolResult2 = normalizeBool('');     // 返回 null

// 规范化整数
const intResult = normalizeInteger('123'); // 返回 123
const intResult2 = normalizeInteger('');   // 返回 null

// 使用Normalizer类
const normalizer = new Normalizer();
normalizer.bool('isActive');          // 将isActive字段规范化为布尔值
normalizer.integer('count');          // 将count字段规范化为整数
normalizer.date('birthDate');         // 将birthDate字段规范化为日期
```

更多详细的使用示例，请参考API文档。

## <span id="api">API文档</span>

完整的API文档可以在[项目文档页面](https://haixing-hu.github.io/js-common-normalizer/)中找到。

## <span id="contributing">贡献</span>

如果您发现任何问题或有改进建议，请随时在[GitHub仓库]上提交issue或pull request。

## <span id="license">许可证</span>

[@qubit-ltd/common-normalizer]在Apache 2.0许可证下分发。
更多详情请参阅[LICENSE](LICENSE)文件。

[@qubit-ltd/common-normalizer]: https://npmjs.com/package/@qubit-ltd/common-normalizer
[GitHub仓库]: https://github.com/Haixing-Hu/js-common-normalizer 