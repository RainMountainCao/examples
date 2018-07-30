function Power(base, exponent)
{
    // write code here
    if(exponent < 0) {
        if(base == 0)
            throw new Error('分母不能为0');
    }
    var res = base;
    var count = 0;
    while(exponent) {
        exponent = exponent & 1;
        exponent >> 1;
        if(count) {
            
        }
        res *= base;
        count++;
    }

    
}