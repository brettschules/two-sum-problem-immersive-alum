function bruteForceTwoSum(array, sum) {
  var nums = []
  var numPairs = []
  for(let i=0; i<array.length; i++) {
    let numToCompareWith = array[i]
    for(let e=0; e<array.length; e++) {
      if((numToCompareWith + array[e]) === sum && !nums.includes(numToCompareWith) && !nums.includes(array[e])) {
        console.log([numToCompareWith, array[e]])
        numPairs.push([numToCompareWith, array[e]])
        nums.push([numToCompareWith], array[e])
        break;
      }
    }
  }
  return numPairs
}
