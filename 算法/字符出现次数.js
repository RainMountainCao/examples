var r = 'Have you ever gone shopping and'.replace(/(\W)/g, '');
var s = r.split('');
var max = 0;
var arr = [];
for(var i=0; i<s.length; i++) {
    value = s[i];
    arr[value] ? arr[value]++ : arr[value]=1;
    max = max > arr[value] ? max : arr[value];
    if(max==3) {
        console.log(value);
        break;
    }
}