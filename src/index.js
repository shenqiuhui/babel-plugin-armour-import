// test code
// const babel = require("@babel/core");
const types = require("@babel/types");

function armourImportPlugin() {
  // test code
  // let code = `import { Button, Alert } from "element-ui";
  // import { Table, Message } from "antd";
  // import { BatchOperationTables } from "armour-antd";
  // import nihao from "armour-antd/components/nihao";`;

  const importPluginObj = {
    visitor: {
      ImportDeclaration(path, options) {
        let node = path.node;
        let source = node.source.value;
        let specifiers = node.specifiers;

        // 判断是否是默认导出，其中一个不是默认导出，则都不是默认导出
        if (!types.isImportDefaultSpecifier(specifiers[0]) && options.opts.libararyName === 'armour-antd') {
          // 如果不是默认导出，则需要转换
          specifiers = specifiers.map(specifier => {
            // 数组内容：当前默认导出的标识、从哪里导入
            return types.importDeclaration(
              [types.importDefaultSpecifier(specifier.local)],
              types.stringLiteral(`${source}/dist/components/${specifier.local.name}`)
            );
          });

          // 替换树结构
          path.replaceWithMultiple(specifiers);
        }
      }
    }
  };

  // test code
  // let result = babel.transform(code, {
  //   plugins: [importPluginObj]
  // });

  // console.log(result.code);

  return importPluginObj;
}

// test code
// armourImportPlugin();

module.exports = armourImportPlugin;