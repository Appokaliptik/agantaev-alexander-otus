(function () {

  var currentSum;
  function sum(a) {
    if (a !== undefined) {
      currentSum = a;
    }     
    function subSum(b){
      currentSum += b;
      return subSum;
    }
    subSum.toString = function() {
      return currentSum;
    };    
    return subSum;    
  }
  
  console.log(sum(0)(5)(3)(8)(-2));
  console.log(sum());


}());


