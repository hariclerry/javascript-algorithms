// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
//   such as cinema, formed from iceman.

// solution 1
const anagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }

    const str1Obj = {}
    const str2Obj = {}

    for (let val of str1) {
        // console.log(val)
        str1Obj[val] = str1Obj[val] ? (str1Obj[val] + 1) : 1; 
    }
    for (let val of str2) {
        // console.log(val)
        str2Obj[val] = str2Obj[val] ? str2Obj[val] + 1 : 1; 
    }
    // console.log("countttt", str2Obj);
    for (let key in str1Obj) {
        if (!(key in str2Obj)) {
            return false;
        }

        if (str2Obj[key] !== str1Obj[key]) {
          return false;
        }
    }
    return true;
}

console.log(anagram('aaz', 'zza'))

// Solution 2 and more efficient

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      // Subtract 1 from lookup key
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("anagrams", "nagaramm");