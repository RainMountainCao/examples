function FindKthToTail(head, k)
{
    // write code here
   var node = head,
       arr = [];
    if(node) {
        arr.push(node.val);
        node = node.next;
    }
    arr = arr.reverse();
    return arr[k]
}