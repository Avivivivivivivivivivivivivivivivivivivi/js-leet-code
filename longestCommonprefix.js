var longestCommonPrefix = function (strs) {
  let pref = "";
  outer: for (it in Array.from(strs[0])) {
    const letter = strs[0][it];
    inner: for (let i = 1; i < strs.length; i++) {
      if (letter !== strs[i][it]) break outer;
    }
    pref += letter;
  }
  return pref;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
