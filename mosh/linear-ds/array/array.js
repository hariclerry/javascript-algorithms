/* 
Create an array from scratch javascript
*/
class newArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    //get method
    get = (index) => {
        if (!this.data[index]) return console.log('no item found');
        return this.data[index];
    }



    //push method
    push = (item) => {
        // console.log('index+++++', index)
        // if (this.data[index]) return console.log('index in use');
        this.data[this.length] = item;
        this.length++;
    }

    // delete method
    popIt = () => {
        // console.log('this.length', this.length)
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // delete method
    del = (index) => {
        const deleteItem = this.data[index]
        this.shiftItem(index);
        return deleteItem;
    }

    // delete method
    shiftItem = (index) => {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        // const deleteItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
    }
}

const arr = new newArray();


const arrPush = arr.push('name')
const arrPush1 = arr.push('age')
const arrPush2 = arr.push('size')
const arrPush3 = arr.push('class')
const arrPush4 = arr.push('address')
const arrDelete = arr.del(1)
// const arrDelete = arr.popIt()
// const arrGet = arr.get(6)


// max method
const arr1 = [1, 17, 4, 9]
maxItem = (array) => {
    let max = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i]
        }
    }
    // const deleteItem = this.data[this.length - 1]
    return max;
}

console.log("********", maxItem(arr1))


// min method
const arr2 = [5, 7, -3, -1, 9, 4]
minItem = (array) => {
    let min = Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= min) {
            min = array[i]
        }
    }
    // const deleteItem = this.data[this.length - 1]
    return min;
}

console.log("********", minItem(arr2))

// reverse method
const arr3 = [5, 7, 3, 1, 9, 4]
reverseItem = (array) => {
    let rev = [];
    for (let i = array.length - 1; i >= 0; i--) {
        rev.push(array[i])
    }
    return rev;
}

console.log("**----**", reverseItem(arr3))


// // sort method
// const arr3 = [5, 7, 3, 1, 9, 4]

// const sortArray = (array) => {
//     let sort = [];
//     for (let i = 0; i >= array.length; i++) {

//     }
// }