function compareTriplets(a, b) {
    if (a.length < 0 && b.length < 0) return [];
    let countA = 0;
    let countB = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            countA++;
        } else if (b[i] > a[i]) {
            countB++;
        } 
    }
     return [countA, countB];
}
compareTriplets([2, 3, 5], [2, 1, 1])
