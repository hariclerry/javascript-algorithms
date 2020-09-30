//SOLUTIONS PART 1
//RECURSION CHALLENGE SECTION SOLUTIONS

//Reverse Solution

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

//isPalindrome Solution

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

//someRecursive Solution

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

//flatten Solution

function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}

//flatten array with flat

arr.flat(Infinity)

//Recursion CHALLENGE Problem Set Solutions Part 2
//capitalizeWords Solution

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
function capitalizedWords2(arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  function helper(input) {
    if (input.length === 0) return newArr;
    if (input[0] !== input[0].toUpperCase()) {
      newArr.push(input[0].toUpperCase());
    }
    return helper(input.slice(1));
  }
  helper(arr);

  return newArr;
}

let words = ["i", "am", "learning", "recursion"];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']




//nestedEvenSum Solution

function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

function nestedEvenSum2(obj) {
  let sumEven = 0;
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = nestedEvenSum2(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  for (let key in newObj) {
    if (newObj[key] % 2 === 0) {
      sumEven += newObj[key];
    }
  }
  return sumEven;
}


//capitalizeFire Solution

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

//stringifyNumbers Solution

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}


function stringifyNumbers2(obj) {
  let newObj = {};
  for (let key in obj) {
    if (
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      newObj[key] = stringifyNumbers2(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  for (let key in newObj) {
    if (typeof newObj[key] === "number") {
      newObj[key] = newObj[key].toString();
    }
  }
  // console.log("herereee--------", newObjs);
  return newObj;
}



//collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

//collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}
