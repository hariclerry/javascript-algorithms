// Hashtable implementation

class HashTable {
    constructor(len) {
        this.table = new Array(len);
        this.size = 0;
    }

    hashFunction(value) {
        let hash = 0;
        const val = value.toString()
        // console.log("mod----", 243 % this.data.length)
        for (let i = 0; i < val.length; i++) {
            // console.log('value.charCodeAt(i)', val, val.charCodeAt(i), 'iiiiiiiiii', i);
            hash = (hash + val.charCodeAt(i) * i) % this.table.length;
            // console.log(hash,);
        }
        return hash;
    }

    // hash method 2
    // calculateHash(key) {
    //     return key.toString().length % this.table.length;
    // }

    // hash method 3
    // calculateHash(key) {
    //     return key % this.table.length;
    // }

    // add items to the hash HashTable
    set(key, value) {
        let memoryLocation = this.hashFunction(key);
        // console.log("memoryLocation----", memoryLocation)
        if (!this.table[memoryLocation]) {
            this.table[memoryLocation] = [];
        }

        // this.table[memoryLocation] = [key, value]
        for (let item of this.table[memoryLocation]) {
            if (item[0] === key) {
                item[1] = value;
                return;
            }
        }
        this.table[memoryLocation].push([key, value]);

        this.size++;
        return this.table;
    }

    get(key) {
        let memoryLocation = this.hashFunction(key);

        if (!this.table[memoryLocation]) return null;
        return this.table[memoryLocation].find((x) => x[0] === key)[1];
    }

    remove(key) {
        let memoryLocation = this.hashFunction(key);
        const removedItem = this.table[memoryLocation]

        if (!this.table[memoryLocation]) return null;
        delete this.table[memoryLocation]
        return removedItem;
    }

    //proper delete/remove method

    removeItem(key) {
        const index = this.hashFunction(key);

        if (this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }
}

const hashTable = new HashTable(30);
// const add1 = hashTable.set('hey', 10)
const add2 = hashTable.set('clerry', 20)
const add3 = hashTable.set("Spain", 10);
const add4 = hashTable.set("ǻ", 5);
const add5 = hashTable.set(20, 1);
const add6 = hashTable.set("spain", 6);
// const getItem = hashTable.get('clerry')
// const removeItem = hashTable.remove('hey')
// console.log("hereeeeeee----", hashTable.table)
// hashTable.hashFunction('hari')


// repeated string

const str = 'a green apple';

const findFirstNonRepeatedChar = s => {
    const obj = {};

    const newStr = s.replace(/\s/g, '');
    for (let i = 0; i < newStr.length; i++) {
        if (obj.hasOwnProperty(newStr[i])) {
            obj[newStr[i]]++
        } else {
            obj[newStr[i]] = 1
        }
    }

    for (let item in obj) {
        if (obj[item] === 1) {
            return item;
        }
    }
    return null;

}

// console.log(findFirstNonRepeatedChar(str))

// repeated string

const arr = [1, 2, 2, 2, 2, 3, 3, 4];

const findMaxRepeatedNumber = array => {
    const obj = {};

    for (let i = 0; i < array.length; i++) {
        if (obj.hasOwnProperty(array[i])) {
            obj[array[i]]++
        } else {
            obj[array[i]] = 1
        }
    }
    // console.log("hereeee---", obj)
    let max = -Infinity;
    let prop = null
    for (let item in obj) {
        if (obj[item] >= max) {
            max = obj[item];
            prop = item
        }
    }

    return prop;

}

// console.log(findMaxRepeatedNumber(arr))

// Input: [1, 7, 5, 9, 2, 12, 3] K = 2

// countPairsWithDiff solution1

const arr2 = [1, 7, 5, 9, 2, 12, 3];
const k = 2;

const kDiff = array => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const add = k + array[i]
        for (let j = 1; j < array.length; j++) {
            if (add === array[j]) {
                count++
            }
        }
    }

    return count;

}

console.log(kDiff(arr2, k))


// countPairsWithDiff solution2
// const arr2 = [1, 7, 5, 9, 2, 12, 3, 4];
// const k = 2;

const kDiff2 = array => {
    let count = 0;
    let setItems = new Set(array)

    for (let i = 0; i < array.length; i++) {
        if (setItems.has(k + array[i]))
            count++;
        if (setItems.has(array[i] - k))
            count++;
        setItems.delete(array[i]);
    }

    return count;

}

console.log(kDiff2(arr2, k))

// Input: [2, 7, 11, 15] - target = 9
// Output: [0, 1](because 2 + 7 = 9)

const myArr = [2, 3, 15, 6, 6];
const target = 9;
const twoSumIndices = (array, t) => {
    let count = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if ((array[i] + array[j]) === t) {
                count.push(i, j)
                return count
            }
        }
    }

}

console.log(twoSumIndices(myArr, target))