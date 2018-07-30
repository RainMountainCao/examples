const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const readline = require('readline');

var filename = path.join(__dirname, './传奇.lrc');
var streamReader = fs.createReadStream(filename);
var rl = readline.createInterface({input: streamReader});
