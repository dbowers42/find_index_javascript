module.exports = function findIndex(items) {
  let buckets = {}

  for(let index = 0, count = items.length; index < count; index++) {
    let key = items[index]

    if(!buckets.hasOwnProperty(key)) {
      buckets[key] = []
    }

    buckets[key].push(index)
  }

  let mapped = []

  for(let key in buckets) {
    let items = buckets[key]

    if(items.length == 1) {
      mapped.push([key, items[0]])
    }
  }

  return mapped.length == 0 ? null : mapped.sort((a, b) => a[1] - b[1])[0]
}


