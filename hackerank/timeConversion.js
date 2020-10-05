function timeConversion(s) {
  /*
   * Write your code here.
   */
  let [hrs, mins, modifier] = s.split(":", 3);
  let mod = modifier.slice(2);
  let sec = modifier.slice(0, 2);

  if (hrs === "12") {
    hrs = "00";
  }

  if (mod.toLowerCase().endsWith("pm")) {
    hrs = parseInt(hrs, 10) + 12;
  }

  return `${hrs}:${mins}:${sec}`;
}

console.log(timeConversion("07:05:45PM"));
