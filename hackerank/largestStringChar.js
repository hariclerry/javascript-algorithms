const largerstStringChar = (str) => {

    let upper = []
    let lower = []
    let strArr = str.split('')
    // console.log(strArr)

    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === strArr[i].toLowerCase()) {
        lower.push(strArr[i]);
      }

      if (strArr[i] === strArr[i].toUpperCase()) {
        upper.push(strArr[i]);
      }
    }

    for (let i = 25; i >= 0; i--) {
         console.log("heerere", upper[i]); 
        if (upper[i] && lower[i]) {
            // console.log('heerere', i) 

            // return "-1"; 
        }
    }
    
    console.log('upperere', upper)
     console.log("loweree", lower);
    // let j = 0;
    // for (let i = 1; i < str.length; i++) {
    //     // console.log("iiiiiiii", str[i]);
    //     // console.log("jjjjjjjjj", str[j] == str[i]);
    //     if (str[j] === str[i] && str[i] === str[i].toUpperCase()) {
            
    //         j++;
    //          console.log("hereeee", str[i]);
    //     }
       
    // }
    // return j + 1;

}

largerstStringChar('aaBabcDaA')