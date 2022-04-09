
var isValid = function (s) {
  if (s.length == 1) return false
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  const map2 = {
    ")": "(",
    "}": "{",
    "]": "[",
  }
  const a = []
  for (char of s) {
    if (map[char]) {
      a.push(char)
    } else {
      if (a[a.length - 1] == map2[char]) {
        a.pop()
      } else {
        return false
      }
    }
  }
  if (a.length) return false
  return true
};
