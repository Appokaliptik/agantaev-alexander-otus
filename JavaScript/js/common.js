(function () {

  
  function sum(a) {
    var currentSum = 0;

    function subSum(b){
      if (b !== undefined) {
        currentSum += b;
      }
      return subSum;
    }
    subSum.toString = function() {
      return currentSum;
    };    
    return subSum;    
  }
  
  console.log(sum(0)(5)(3)(8)(-2));
  console.log(sum(0)(5)(3)(8)());
  console.log(sum());


}());


