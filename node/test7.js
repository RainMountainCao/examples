//模拟require缓存
function $require(id) {
    const fs = require('fs');
    const path = require('path');
    let filename = path.join(__dirname, id);
    $require.cache = $require.cache || {};
    if($require.cache[filename]) {
        return $require.cache[filename].exports;
    }
    let dirname = path.dirname(filename);
    let code = fs.readFileSync(filename);
    let module = {id: filename, exports: {}};
    exports = module.exports;
    code = `function($require, module, exports, __direname, __filename) {
        ${code}
    }($require, module, exports, direname, filename)`;
    eval(code);
    $require.cache[filename] = module;
    return module.exports;
}