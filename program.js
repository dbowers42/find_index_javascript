let findIndex = require('./find_index')

let examples =  [
  ['A'],
  ['A', 'B', 'C', 'A', 'C'],
  ['A', 'A', 'B', 'B', 'C'],
  ['A', 'B', 'A', 'C', 'A'],
  ['A', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'A'],
  ['A', 'A', 'A'],
  ['A', 'B', 'C', 'A', 'C'],
  []
]

for(let index = 0, count = examples.length; index < count; index++) {
  console.log('-'.repeat(100))
  console.log(examples[index])
  console.log(findIndex(examples[index]))
}
