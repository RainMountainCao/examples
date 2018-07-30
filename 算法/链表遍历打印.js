function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
    var arr = [],
        node = head;
    while(node) {
        arr.push(node.val);
        node = node.next;
    }
    while(arr.length) {
        console.log(arr.pop());
    }
}
var h = new ListNode(0),
    n = h;
for(var i=0; i<8; i++) {
    n.next = (new ListNode(i+1));
    n = n.next;
}
printListFromTailToHead(h);