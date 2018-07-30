
function jumpFloorII(number)
{
    var cache = {};
    cache[0] = 1;
    cache[1] = 1;
    var i = 2;
    while(i <= number) {
        var j = i
        cache[i] = 0;
        while(j>0) {
            cache[i] += cache[i-j];
            j--;
        }
        i++;
    }
    return cache[number];
}


console.log(jumpFloorII(4));