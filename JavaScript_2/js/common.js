(function () {

  var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
  }

  var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
  })

  function promiseReduce(asyncFunctions, reduce, initialValue) {     
    return new Promise((resolve) =>{      
      var length = asyncFunctions.length;
      var results = new Array(length);
      var reduceResult = 0;
      if (initialValue == undefined) {
        initialValue = 0;
      }
      for (var i = initialValue; i <= length; i++) {
        reduceResult += results[i];
      }
      result = reduceResult
      resolve( result );
     
    })
    .then(
      result=>{
        console.log(result);
      }
    )
  }

  promiseReduce(
    [fn1, fn2], 
    function (memo, value) {
      console.log('reduce');
      return memo + value;
    }, 
    1
    )
  .then(console.log);

  
}());


