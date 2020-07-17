function areThereDuplicates( ...arr ) {
  // good luck. (supply any arguments you deem necessary.)
  if (arr.length <= 0) {
    return false;
  }
  // obj variable
  let obj = {};
  // iterate over array and check if there are duplicates

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;

}

console.log(areThereDuplicates());



//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}


//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
//areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
