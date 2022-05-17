// iterative solution
function countdownIter(num) {
    // if (num <= 0) return "All done!!!";
    for (let i = num; i > 0; i--) {
        console.log(`Goooo.... ${i}`)
    }
}

// console.log(countdownIter(5));

function countdownRecur(num) {
    if (num <= 0) {
        console.log("All done!!!")
        return;
    }
    console.log('goooooo', num)
    num--
    countdownRecur(num);
    
}

console.log(countdownRecur(5));