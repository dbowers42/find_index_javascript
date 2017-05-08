let chai = require('chai')
let findIndex = require('./find_index.js')
let assert = chai.assert

describe('findIndex', function() {
  let withUnique = [
    {input: ['A'], expected: ['A', 0]},
    {input: ['A', 'B', 'C', 'A', 'C'], expected: ['B', 1]},
    {input: ['A', 'A', 'B', 'B', 'C'], expected: ['C', 4]},
    {input: ['A', 'B', 'A', 'C', 'A'], expected: ['B', 1]},
    {input: ['A', 'B', 'B', 'B'], expected: ['A', 0]},
    {input: ['B', 'B', 'B', 'A'], expected: ['A', 3]}
  ]

  let noUnique = ['A', 'B', 'C', 'C', 'B', 'A']

  it('Finds the first unique item in an array', function(done) {
    withUnique.forEach(function(example) {
      assert.deepEqual(findIndex(example.input), example.expected)
    })

      done()
    }
  )

  it('Returns null if the array is empty', function(done) {
    assert.deepEqual(findIndex([]), null)

    done()
  })

  it('Returns null if the array contain no unique items', function(done){
    assert.deepEqual(findIndex(noUnique), null)
    done()
  })
})