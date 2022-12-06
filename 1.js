//1
const findMostCalories = (input) => Math.max(...input.split('\n\n').map(a => a.split('\n').map(n => parseInt(n)).reduce((b, c) => b + c, 0)))
//2
const sumTopThree = (input) => input.split('\n\n').map(a => a.split('\n').map(n => parseInt(n)).reduce((b, c) => b + c, 0)).sort((a, b) => a <= b ? 1 : -1).slice(0, 3).reduce((a, b) => a + b, 0)