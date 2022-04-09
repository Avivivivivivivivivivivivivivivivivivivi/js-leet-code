var romanToInt = function (s) {
  const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  let a = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    a += map[s[i]]
    if (i != 0) {
      if (s[i] == "M" || s[i] == "D") {
        if (s[i - 1] == "C") {
          i--
          a -= 100
        }
      }
      if (s[i] == "L" || s[i] == "C") {
        if (s[i - 1] == "X") {
          i--
          a -= 10
        }
      }
      if (s[i] == "V" || s[i] == "X") {
        if (s[i - 1] == "I") {
          i--
          a -= 1
        }
      }
    }
  }
  return a
};