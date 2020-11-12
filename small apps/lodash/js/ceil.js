
  function _ceil(num, val) {
   return val < 0 
    ? "your value is lower than 0" 
    :  num.toFixed(val);
    
  }
  console.log(_ceil(10.12222222 , 1));