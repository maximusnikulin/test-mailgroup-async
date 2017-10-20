function asyncForEach (arr, fn) {  
    var defaultLog  = console.log;
    
    var customLog = function() {
        var args = [].slice.call(arguments, 0);
        var str = args[0];            
        str = "Processing " + str.charAt(0).toLowerCase() + str.slice(1);
        args[0] = str;
        return defaultLog.apply(this, args);
    };
    return new Promise(function(res, rej) {            
        var i = 0;            
        var next = function(i) {
            if (i == arr.length - 1) {                    
                res();                    
            } else {
                fn(arr[i], i, () => next(i));
                i += 1;
            }
        }            
        setTimeout(() => {
            console.log = customLog;
            next(i);
        }, 0);
    })
    .then(() => new Promise(function(res,rej) {
       console.log =  defaultLog;
       res();
    }));                       
}

module.exports = asyncForEach;