function viralAdvertising(n) {
  let totalLikes = 0;
  let shared = 5;
  let liked = 0;

  for (var i = 0; i < n; i++) {
    liked = Math.floor(shared / 2);
    totalLikes += liked;
    shared = liked * 3;
  }

  return totalLikes;
}
console.log(viralAdvertising(5));
