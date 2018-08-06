(function () {
  
  function sum(a) {
    var currentSum;
    if (a !== undefined) {
      currentSum = a;
    } else {
      currentSum = 0;
    }

    function subSum(b){
      if (b !== undefined) {
        currentSum += b;
        return subSum;
      } else {
        return currentSum;
      }      
    }
    subSum.toString = function() {
      return currentSum;
    };    
    return subSum;
  }
  
  console.log(sum(5)());
  console.log(sum(5)(6)());
  console.log(sum());
  console.log(sum(1)() === 1);
  console.log(sum(5)().toFixed(16));
  


}());


