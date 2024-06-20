function flipCoin(callback) {
    setTimeout(() => {
      let outcome = Math.random() < 0.5 ? "heads" : "tails";
      callback(outcome);
    }, 500); 
    
  }
  
  
 
  flipCoin((result) => {
    console.log(`The result is: ${result}`);
  });
