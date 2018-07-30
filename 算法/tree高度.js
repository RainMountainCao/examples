var Tree = function() {
    this.add = add;
    this.height = height;
    this.root = null;
}
var Node = function(parent, value) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
}
function add(node, curr) {
    if(!this.root) {
        this.root = new Node(null, node.parent);
        curr = this.root;
    }
    if(curr) {
        if(node.parent == curr.value) {
            if(!curr.left){
                curr.left = node;
            }else if(!curr.right){
                curr.right = node;
            }
            return true;
        }
        if(this.add(node, curr.left)) {
            return true;
        }else if(this.add(node, curr.right)){
            return true;
        }
    }else {
        return false;
    }
}
function height(curr) {
    if(!curr) {
        return 0;
    }
    var lh = this.height(curr.left) + 1;
    var rl = this.height(curr.right) + 1;
    return lh > rl ? lh : rl;
}

var n = 7;
var nodeList = [[0, 1], [0, 2], [1, 3], [1, 4], [4, 5], [5, 7], [5, 8]];
var t = new Tree();
for(var i=0; i<n-1; i++) {
    t.add(new Node(nodeList[i][0], nodeList[i][1]), t.root);
}
console.log(t.height(t.root));

/*
var Tree = function() {
    this.add = add;
    this.height = height;
    this.root = null;
}
var Node = function(parent, value) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
}
function add(node, curr) {
    if(!this.root) {
        this.root = new Node(null, node.parent);
        curr = this.root;
    }
    if(curr) {
        if(node.parent == curr.value) {
            if(!curr.left){
                curr.left = node;
            }else if(!curr.right){
                curr.right = node;
            }
            return true;
        }
        if(this.add(node, curr.left)) {
            return true;
        }else if(this.add(node, curr.right)){
            return true;
        }
    }else {
        return false;
    }
}
function height(curr) {
    if(!curr) {
        return 0;
    }
    var lh = this.height(curr.left) + 1;
    var rl = this.height(curr.right) + 1;
    return lh > rl ? lh : rl;
}
var n = parseInt(readline());
var nodeList = [];
for(var i=0; i<n; i++) {
    var arr = readline().split(' ');
    nodeList.push(arr);
}
var t = new Tree();
for(var i=0; i<n-1; i++) {
    t.add(new Node(nodeList[i][0], nodeList[i][1]), t.root);
}
print(t.height(t.root));

*/