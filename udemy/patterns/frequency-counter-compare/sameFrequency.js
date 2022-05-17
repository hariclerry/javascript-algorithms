function sameFrequency(num1, num2) {
    // convert numbers to strings
    const numStr1 = num1.toString();
    const numStr2 = num2.toString();
    // numbers should have same length
    if (numStr1.length !== numStr2.length) {
        return false;
    }
    // set variables for  objs
    let num1Obj = {};
    let num2Obj = {};
    
    // loop through string and append them to objects
    for (let i = 0; i < numStr1.length; i++) {
        num1Obj[numStr1[i]] = num1Obj[numStr1[i]] ? num1Obj[numStr1[i]] + 1 : 1;
    }

    for (let i = 0; i < numStr2.length; i++) {
      num2Obj[numStr2[i]] = num2Obj[numStr2[i]] ? num2Obj[numStr2[i]] + 1 : 1;
    }
    
    // loop through objects to determine if they have same frequency
    for (let key in num1Obj) {
        if (!(key in num2Obj)) {
            return false
        }
        if (num2Obj[key] !== num1Obj[key]) {
           return false;
         }
    }

     return true;

}

console.log(sameFrequency(452, 524))



//sameFrequency Solution
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}