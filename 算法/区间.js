function getIntersection(...args) {
    var len = args.length;
    if(len === 0) {
        return null;
    }
    if(len === 1) {
        return args[0];
    }

    var res = [],
        i = 0;

    for(var n=1; n<len; n++) {
        i++;
        args[i].forEach((value) => {
            if(typeof value != 'number') {
                return null;
            }
        });
        if(Math.min.apply(args[i]) > Math.max.apply(args[n]) || Math.min.apply(args[n]) > Math.max.apply(args[i]))
            return null;
    
    }

    }

/*    args.forEach((value, index) => {
        if(Math.max.apply(value))
        Math.max.apply(value);
        value.

        console.log();
    })*/

    //console.log(args);


getIntersection([1, 4], [3, 5]); // return [ 3, 4 ]
getIntersection([5, 2], [4, 9], [3, 6]); // return [ 4, 5 ]
getIntersection([1, 7], [8, 9]); // return null
getIntersection(['x', 7], [4, 9]); // return null
getIntersection([1, 2]); // return [ 1, 2 ]
getIntersection([1, 2], [2, 3]); // return [ 2, 2 ]