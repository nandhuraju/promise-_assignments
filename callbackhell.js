
function add(a, b, callback) {
    setTimeout(() => {
      let result = a + b;
      console.log(`Adding ${a} and ${b}: ${result}`);
      callback(result);
    }, 3000);
  }

 
  
 
  function multiplyByTwo(number, callback) {
    setTimeout(() => {
      let result = number * 2;
      console.log(`Multiplying ${number} by 2: ${result}`);
      callback(result);
    }, 2000);
  }
  
 
  function subtractThree(number, callback) {
    setTimeout(() => {
      let result = number - 3;
      console.log(`Subtracting 3 from ${number}: ${result}`);
      callback(result);
    }, 2000);
  }
  
 
  function divideByFour(number, callback) {
    setTimeout(() => {
      let result = number / 4;
      console.log(`Dividing ${number} by 4: ${result}`);
      callback(result);
    }, 2000);
  }
  
 
  add(5, 10, (sumResult) => {
    multiplyByTwo(sumResult, (multiplyResult) => {
      subtractThree(multiplyResult, (subtractResult) => {
        divideByFour(subtractResult, (finalResult) => {
          console.log(`Final Result: ${finalResult}`);
        });
      });
    });
  });


  