(function () {

  var fn1 = () => {
    console.log('fn1');
    return Promise.resolve(2);
  }

  var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(4), 1000)
  })

  function promiseReduce(asyncFunctions, reduce, initialValue) {
    return new Promise((resolve) =>{      
      var length = asyncFunctions.length;
      var results = new Array(length);
      var reduceResult = 0;
      if (initialValue == undefined) {
        initialValue = 0;
      }
      for (var i = 0; i < length; i++) {
        asyncFunctions[i]().then(result => {
          initialValue = initialValue * result 
          console.log(initialValue);
        }) ;
      }      
    })
    
  }

  promiseReduce(
    [fn1, fn2], 
    function (memo, value) {
      console.log('reduce');
      return memo * value;
    }, 
    1
    )
  .then(console.log);

  
}());


