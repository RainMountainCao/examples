var Tree = function(root) {
    this.add = add;
    this.height = height;
    this.root = null;
    this.BFC = BFC;
    this.DFC = DFC;
}
var Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function add(node) {
    if(this.root) {
        var curr = this.root;
        while(curr && (curr.left || curr.right)) {
            if(node.value > curr.value) {
                curr = curr.right;
            }else {
                curr = curr.left;
            }
        }
        curr = node;
    }else {
        this.root = node;
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

function DFC() {
    var arr = [],
        curr = this.root;
    while(curr || arr.length !== 0) {
        if(curr) {
            arr.push(curr);
            console.log(curr.value);
            if(curr.left) {
                curr = curr.left;
            }else if(curr.right) {
                curr = curr.right;
            }
        }else if(arr.length !== 0) {
            curr = arr.pop();
        }else {
            break;
        }
    }
}

function BFC() {

}

var n = 5;
var nodeList = [5,6,5,4,8];
var t = new Tree();
for(var i=0; i<n; i++) {
    t.add(new Node(nodeList[i]));
}
t.DFC();
