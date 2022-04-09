var lengthOfLastWord = (s) => {
    const a = s.trim().split(/ +/);
    return a[a.length - 1].length
};
