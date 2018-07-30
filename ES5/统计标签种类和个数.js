var node = document.getElementsByTagName('*');
var obj = {},
    tagName;
for(var i=0; i<node.length; i++) {
    tagName = node[i].tagName.toLowerCase();
    if(obj.hasOwnProperty(tagName)) {
        obj[tagName]++;
    } else {
        obj[tagName] = 1;
    }
}
console.log(obj);