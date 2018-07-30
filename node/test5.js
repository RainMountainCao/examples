//模拟模块加载
function $require(id) {
  const fs = require('fs');
  const path = require('path');

  const filename = path.join(__dirname, id);
  const dirname = path.dirname(filename);

  let module = {id: filename, exports:{}};
  let exports = module.exports;

  let code = fs.readFileSync(filename);
  code = `function($require, module, exports, __direname, __filename) {
    ${code}
  }($require, module, exports, direname, filename)`;
  eval(code);
  return module.exports;
}

