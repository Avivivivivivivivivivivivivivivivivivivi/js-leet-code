var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/\W/g, '')
  let indexStart = 0
  let indexEnd = s.length - 1
  console.log(indexStart, indexEnd)
  do {
    if (indexStart === indexEnd || indexEnd < indexStart) return true
    if (s[indexStart++] !== s[indexEnd--]) return false
  } while (true)
}

console.log(isPalindrome('aa'))
