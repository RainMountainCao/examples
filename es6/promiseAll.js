Promise.all = function(arr) {
    return new Promise(function(resolve, reject) {
      if (!arr || typeof arr.length === 'undefined')
        throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;
  
      function res(i, val) {
        try {
          // 如果 val 是 Promise 对象的话，则执行 Promise,直到 resolve 了一个非 Promise 对象
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(
                val,
                function(val) {
                  res(i, val);
                },
                reject
              );
              return;
            }
          }
          // 用当前resolve||reject 的值重写 args[i]{Promise} 对象
          args[i] = val;
          // 直到所有的 Promise 都执行完毕，则 resolve all 的 Promise 对象，返回args数组结果
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          // 只要其中一个 Promise 出现异常，则全部的 Promise 执行退出，进入 catch异常处理
          // 因为 resolve 和 reject 回调有 done 变量的保证只能执行一次，所以其他的 Promise 都不执行
          reject(ex);
        }
      }
  
      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };