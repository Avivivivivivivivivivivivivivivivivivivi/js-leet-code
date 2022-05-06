const dailys = [
  { name: 'Żabka', val: 10, min: 5, max: 50 },
  { name: 'Rossman', val: 2, min: 20, max: 100 },
  { name: 'PysznePL', val: 4, min: 40, max: 70 },
]
const monthlys = [
  { name: 'Netflix', min: 60, max: 60 },
  { name: 'Internet', min: 69, max: 69 },
]

let dailysValSum = dailys.reduce((prev, cur) => prev + cur.val, 0)

const dailysSpec = {}
for (let i in dailys) {
  dailysSpec[i] = dailys[i].val / dailysValSum
}

function weightedRand(spec = dailysSpec) {
  let i
  let sum = 0
  let r = Math.random()
  for (i in spec) {
    sum += spec[i]
    if (r <= sum) return i
  }
}

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

function genRandomDecimal(min, max, decimalPlaces = 2) {
  const rand =
    Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min
  const power = Math.pow(10, decimalPlaces)
  return Math.floor(rand * power) / power
}

function generateSpendings(
  startDate = new Date(),
  daily = dailys,
  monthly = monthlys,
  days = 60,
  spendingsCount = 1500,
) {
  let arr = []
  for (let i = 0; i < days / 30; i++) {
    arr = [
      ...arr,
      ...monthly.map((item) => {
        return {
          date: startDate.addDays(i * 30),
          price: genRandomDecimal(item.min, item.max),
          name: item.name,
        }
      }),
    ]
  }
  for (let i = 0; i < spendingsCount; i++) {
    const item = daily[weightedRand()]

    arr.push({
      date: startDate.addDays(genRandomDecimal(0, days, 0)),
      price: genRandomDecimal(item.min, item.max),
      name: item.name,
    })
  }

  return arr
}

generateSpendings().forEach((item) => {
  const { date, name, price } = item
  console.log(`${date};${name};${price}`)
})
