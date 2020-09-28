function plusMinus(arr) {
    if (arr.length === 0) return null;
     let positive = 0;
     let negative = 0;
     let zero = 0;
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] > 0) {
            positive++
        }
        if (arr[i] === 0) {
            zero++
        }
        if (arr[i] < 0) {
         negative++
        }
    }
    console.log("positive", (positive / arr.length).toPrecision(6));
    console.log("negative", (negative / arr.length).toPrecision(6));
    console.log("zero", (zero / arr.length).toPrecision(6));

}

plusMinus([-4, 3, -9, 0, 4, 1]);
