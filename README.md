## babel-plugin-armour-import

**The plugin to transform path into the package for armour-antd!**

## Install

> npm install babel-plugin-armour-import -D

## Example

Converts:

> import { BatchOperationTables } from 'armour-antd';

To:

> import BatchOperationTables from 'armour-antd/dist/components/BatchOperationTables';

## Usage

### Via .babelrc or babel-loader.

Webpack config:

```js
plugins: [
  [
    'armour-import',
    { libararyName: 'armour-antd' }
  ]
]
```
