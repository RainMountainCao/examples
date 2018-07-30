function Tree() {
    this.root = null;
    this.height = height;
    this.BFC = BFC;
    this.DFC = DFC;
    this.init = init;
    this.add = add;
}

function node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function init(arr) {
    var that = this;
    arr.forEach(function(value){
        that.add(that.root, new node(value));
        console.log(that.root);
    });
}

function add(root, node) {
    if(root) {
        // root存在
        if(node.value < root.value) {
            this.add(root.left, node);
        }else {
            this.add(root.right, node);
        }
        console.log("root存在");
    }else if(root == null){
        root = node;
        console.log("root不存在");
        console.log(root);
        console.log(this.root);
    }
}

function height() {

}

function DFC() {
    // 深度优先遍历
    var arr = [],
        node = this.root;
        arr.push(node);
    //console.log(node);
    /*
    while(node || arr.length !== 0) {
        console.log(node.value);
        if(node.left) {
            node = node.left;
            arr.push(node);
        }else if(node.right) {
            node = node.right;
            arr.push(node);
        }else{
            node = arr.pop();
        }
    }
    */
}

function BFC() {
    // 广度优先遍历
}

var t = new Tree();
t.init([2,3,2,1,7,8,6,2]);
t.DFC();
t.BFC();