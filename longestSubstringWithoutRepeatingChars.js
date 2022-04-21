var lengthOfLongestSubstring = function (s) {
  const charArray = Array.from(s);
  let maxLength = 0;
  let curWord = "";
  for (i in charArray) {
    let indexOf = curWord.indexOf(charArray[i]);
    if (indexOf >= 0) {
      curWord = curWord.substring(indexOf + 1);
    }
    curWord += charArray[i];
    maxLength = maxLength > curWord.length ? maxLength : curWord.length;
  }
  return maxLength;
};

console.log("pwwkew", lengthOfLongestSubstring("pwwkew")); // 3
// console.log("aab", lengthOfLongestSubstring("aab")) // 2
// console.log("aaa", lengthOfLongestSubstring("aaa")) // 1
// console.log("abba", lengthOfLongestSubstring("abba")) // 2
// console.log("dvdf", lengthOfLongestSubstring("dvdf")) // 2
// console.log("abcabcbb",  lengthOfLongestSubstring("abcabcbb")) // 3

// 1 0
// 2 1
// 3 2
// 1 3
// 2 4
// 3 5
// 2 6
// 2 7
