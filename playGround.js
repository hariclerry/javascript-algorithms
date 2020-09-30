function stairCase(num) {


    for (let i = 1; i <= num; i++) {
    //     console.log("hereree", i)
    //     let pattern = "";

    //     for (let row = 1; row <= i; row++) {
    //         // console.log("rowww", row);
    //         pattern += '#';
            
    //     }
    // //    return pattern; 
    //     console.log(pattern)
        
    console.log(" ".repeat(num - i) + "#".repeat(i));
        
    }
// return stairCase('')
    
 
}

console.log(stairCase(4));
