function rectCover(number)
{
    if(number === 0) {
        return 0;
    }
    var cache = {};
    cache[0] = 1;
    cache[1] = 1;

    var i = 2;
    while(i <= number) {
        cache[i] = 0;
        cache[i] = cache[i-1] + cache[i-2];
        i++;
    }
    return cache[number];
}

console.log(rectCover(4))