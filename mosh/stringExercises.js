// Find the number of vowels in a string.Vowels in English are A, E, O, U and I.
// Input: “hello”,  Output: 2 


const countVowels = (str) => {
    if (str === null || str === undefined) return;
    const vowels = ['a', 'e', 'o', 'u', 'i'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let convert = str[i].toLowerCase()
        if (vowels.includes(convert)) {
            count++;
        }
    }

    return count;
}
// console.log("findVowels----", countVowels(null));

//regex solution

function vowelsCounter(text) {
    // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if (matchingInstances) {
        // Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}

//Reverse a string.
// Input: “hello”
// Output: “olleh” 

// O (n2) time complexity
const reverseString = (str) => {
    if (str === null || str === undefined) return '';
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return reversed;
}

const reverseStringJoin = (str) => {
    if (str === null || str === undefined) return '';

    return str.split('').reverse().join('');
}

// console.log("reverseString----", reverseStringJoin('hello'));

//  Reverse the order of words in a sentence.
// Input: “Trees are beautiful”
// Output: “beautiful are Trees”

const reverseWord = (str) => {
    if (str === null || str === undefined) return '';
    return str.split(' ').reverse().join(' ');
}

function reverseWords(message) {
    let msg = message.split(' ')
    let leftIndex = 0, rightIndex = msg.length - 1;
    // Walk towards the middle, from both sides
    while (leftIndex < rightIndex) {

        // Swap the left char and right char
        const temp = msg[leftIndex];
        msg[leftIndex] = msg[rightIndex];
        msg[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
    return msg.join(' ');
}

// console.log("reverseString----", reverseWord('Trees are beautiful'));

// Check if a string is a rotation of another string.
// Input: “ABCD”, “DABC” (rotate one char to the right)
// Output: true 
// Input: “ABCD”, “CDAB” (rotate two chars to the right)
// Output: true
// Input: “ABCD”, “ADBC”
// Output: false 

const areRotation = (str1, str2) => {
    if (str1 === null || str2 === null)
        return false;
    return (str1.length === str1.length && (str1 + str1).includes(str2))
}
// console.log("rotateString----", areRotation('ABCD', 'DABC'));

// while loop solution

function checkRotation(str1, str2) {
    const char0 = str1[0];
    let ind = str2.indexOf(char0);
    while (ind > -1) {
        const start = str2.substring(0, ind);
        const end = str2.substring(ind, str2.length);
        if (end + start === str1) {
            return true;
        }
        ind = str2.indexOf(char0, ind + 1)
    }
    return false
}
// console.log(checkRotation("assads", "adsass"))

// Remove duplicate characters in a string.
// Input: “Hellooo!!”
// Output: “Helo!”

// set method
const removeDuplicates = (str) => {
    if (str === null) return;
    // const newSet = new Set(str);
    // return [...newSet].join('');

    return [...new Set(str)].join('');
}

// Iterative method
const removeDuplicates2 = (str) => {
    if (str === null) return;
    let remove = '';
    for (let i = 0; i < str.length; i++) {
        if (!remove.includes(str[i])) {
            remove += str[i]
        }
    }

    return remove;
}

// console.log(removeDuplicates("hellooeoooeh there"))

// Find the most repeated character in a string.
// Input: “Hellooo!!”
// Output: ‘o’

// using Maps
const repeatedCharacter = (str) => {
    let myMap = new Map();
    for (let i = 0; i < str.length; i++) {
        let val = myMap.get(str[i])
        if (val) {
            val++
            myMap.set(str[i], val)
        } else {
            myMap.set(str[i], 1);
        }
    }
    let max = 0;
    let letter = ' '
    for (let [key, value] of myMap) {
        if (max < value) {
            max = value
            letter = key
        }
    }
    return letter;
}

// console.log(repeatedCharacter("hellooeoooeh"))

// Using onjects

function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

// using Arrays

function maxRecurringChar2(text) {
    let charMap = {}
    let charArray = []
    let vaulesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    vaulesArray = Object.values(charMap)
    maxCharValue = Math.max(...vaulesArray)

    return charArray[vaulesArray.indexOf(maxCharValue)]
}


// Capitalize the first letter of each word in a sentence.Also, remove any
// extra spaces between words.
// Input: “trees are beautiful”
// Output: “Trees Are Beautiful”
// Input: “ trees are beautiful ”
// Output: “Trees Are Beautiful”

const capitaliseLetters = (str) => {

    let words = str.trim().split(' ');
    // let words = ' '

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
        }
    }

    return words.join(' ');
}


// console.log(capitaliseLetters("trees are beautiful, There"))

// Detect if two strings are anagram of each other.A string is an
// anagram of another string if it has the exact same characters in any
// order.
// Input: “abcd”, “adbc”
// Output: true
// Input: “abcd”, “cadb”
// Input: true
// Input: “abcd”, “abcd”
// Output: true
// Input: “abcd”, “abce”
// Output: false 

// O(n)
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

// O(n logn)
function anagrams(stringA, stringB) {

    if (typeof stringA !== 'string' || typeof stringB !== 'string' || stringA.length !== stringB.length) return false;

    /*First, we remove any non-alphabet character using regex and convert       
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
    const stringASort = stringA.split('').sort().join('');
    const stringBSort = stringB.split('').sort().join('');
    return stringASort === stringBSort
}

// console.log(anagrams("abcd", "adcc"))

// Check if a string is palindrome.If we read a palindrome string from
// left or right, we get the exact same characters.
// Input: “abba”
// Output: true
// Input: “abcba”
// Output: true
// Input: “abca”
// Output: false

function palindrome(str) {
    if (typeof str !== 'string') return false;
    return str.toLocaleLowerCase() === str.split('').reverse().join('').toLocaleLowerCase();
}

//optimized solution
function palindrome2(str) {
    if (typeof str !== 'string') return false;

    let left = 0,
        right = str.length - 1;

    while (left < right) {
        // if (str.charAt(left++) !== str.charAt(right--))
        //     return false;
        if (str.charAt(left) !== str.charAt(right)) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}

console.log(palindrome2("repaper"));
