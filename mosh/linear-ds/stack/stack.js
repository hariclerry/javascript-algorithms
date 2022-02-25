// reverse a string
const str = 'clerry';

// use stack
function reverseStr1(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}

const reverseStr = (str1) => {
    const strArr = str1.split('');
    // console.log("hereeeeetoop", strArr.length)
    let arr = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        arr.push(strArr[i]);
    }

    return arr.join('')
}

// console.log("hereeee", str.split('').reverse().join(''))

// console.log("hereeeestrrrr", reverseStr(str))

function reverseString2(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString2("hello");

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');


// Balanced Expressions Exercise

const exp = (str) => {
    const arr = [];
    // console.log("----", str[str.length - 1])
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === "(" || str[i] === "{" || str[i] === "[" || str[i] === "<") {
            arr.push(str[i]);
        }

        if (str[i] === ")" || str[i] === "}" || str[i] === "]" || str[i] === ">") {
            if (arr.length === 0) return false;
            const p = arr.pop();
            if (
                (str[i] === ")" && p !== "(") ||
                (str[i] === "}" && p !== "{") ||
                (str[i] === "]" && p !== "[") ||
                (str[i] === ">" && p !== "<")
            ) {
                return false;
            }
        }
    }
    console.log("----", arr.length)
    return arr.length === 0 ? true : false;
}

// console.log("exp----", exp("2+3>"))
// refactor

const exp1 = (str) => {
    const arr = [];
    const leftChar = ["(", "{", "[", "<"]
    const rightChar = [")", "}", "]", ">"]
    // console.log("----", str[str.length - 1])
    for (let i = 0; i <= str.length - 1; i++) {
        if (leftChar.includes(str[i])) {
            arr.push(str[i]);
        }

        if (rightChar.includes(str[i])) {
            if (arr.length === 0) return false;
            const p = arr.pop();
            if (
                (str[i] === ")" && p !== "(") ||
                (str[i] === "}" && p !== "{") ||
                (str[i] === "]" && p !== "[") ||
                (str[i] === ">" && p !== "<")
            ) {
                return false;
            }
        }
    }
    // console.log("----", arr.length)
    return arr.length === 0 ? true : false;
}

// console.log("exp----", exp1("<2+3>"))


// Stack with array

class Stack {
    constructor() {
        this.stack = [];
        this.length = 0;
    }

    pushItem = (item) => {
        this.stack[this.length] = item;
        this.length++;
        return this;
    }


    popItem = () => {
        const deleteItem = this.stack[this.length - 1]
        // this.stack[deleteItem] = null;
        this.length--;
        return deleteItem;
    }
}

const st = new Stack();

const push = st.pushItem(2);
const push2 = st.pushItem("cat");
// const pop = st.pushItem();

console.log("hereeeee-----", st.stack)