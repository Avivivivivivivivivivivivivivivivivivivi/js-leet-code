for (let i = 1; i < 101; i++) {
  let phrase = ''
  if (!(i % 3)) phrase += 'fizz'
  if (!(i % 5)) phrase += 'buzz'
  console.log(phrase != '' ? phrase : i)
}
