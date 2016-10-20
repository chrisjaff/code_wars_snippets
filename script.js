// Rental Car Calculator
function rentalCarCost(days){
  let total = days * 40
  if(days >= 7){total -= 50}
  else if(days >= 3){total -= 20}
  return total
}

// Clean Up after your dog!
function canCollectCrap(field, bags, capacity){
  let numCrap = 0
  let numDog = 0
  field.forEach(row => {
    row.forEach(spot => {
      if (spot == "@"){
        numCrap++
      } else if (spot == "D"){
        numDog++
      }
    })
  })
  if(numDog > 0){return "Dog!!"}
  if(numCrap > bags * capacity) {
    return "Cr@p"
  } else {
    return "Clean"
  }
}

// Take a Ten Minute Walk
function isValidWalk(walk) {
  return (doesReturnToStart(walk) && walk.length == 10)
}

function doesReturnToStart(directions){
  let norths = directions.filter(dir => {return dir == "n"})
  let souths = directions.filter(dir => {return dir == "s"})
  let wests = directions.filter(dir => {return dir == "w"})
  let easts = directions.filter(dir => {return dir == "e"})
  return (norths.length == souths.length && wests.length == easts.length)
}

// Snail Sort
function snail(array) {
  if(array == [[]]){return []}
  if(array[0].length == 1){return array[0]}
  let mergedArray = [].concat.apply([], array);
  let arrayObj = {
    sortedArr: [],
    unSorted: array
  }
  while(mergedArray.length != arrayObj.sortedArr.length){
    arrayObj = traverseRight(arrayObj)
    if(mergedArray.length == arrayObj.sortedArr.length){break}
    arrayObj = traverseDown(arrayObj)
    if(mergedArray.length == arrayObj.sortedArr.length){break}
    arrayObj = traverseLeft(arrayObj)
    if(mergedArray.length == arrayObj.sortedArr.length){break}
    arrayObj = traverseUp(arrayObj)
    if(mergedArray.length == arrayObj.sortedArr.length){break}
  }
  return arrayObj.sortedArr
}

function traverseRight(obj){
  sortedArr = []
  let arr = obj.unSorted
  for (let i = 0; i < arr[0].length; i++){
    sortedArr.push(arr[0][i])
  }
  return {
    sortedArr: obj.sortedArr.concat(sortedArr),
    unSorted: arr.slice(1, arr.length)
  }
}

function traverseDown(obj){
  let sortedArr = []
  let arr = obj.unSorted
  for (let i = 0; i < arr.length; i++){
    sortedArr.push(arr[i][arr[i].length - 1])
  }
  let unSorted = obj.unSorted.map(function(row){
    return row.slice(0, row.length - 1)
  })
  return {
    sortedArr: obj.sortedArr.concat(sortedArr),
    unSorted: unSorted
  }
}

function traverseLeft(obj){
  let sortedArr = []
  let arr = obj.unSorted
  let lastArrIndex = arr.length - 1
  for (let i = 0; i < arr[lastArrIndex].length; i++){
    let lastIndexOflastArrIndex = arr[lastArrIndex].length - 1
    sortedArr.push(arr[lastArrIndex][lastIndexOflastArrIndex - i])
  }
  return {
    sortedArr: obj.sortedArr.concat(sortedArr),
    unSorted: arr.slice(0, arr.length - 1)
  }
}

function traverseUp(obj){
  let arr = obj.unSorted
  let sortedArr = []
  for(let i = 0; i < arr.length; i++){
    sortedArr.push(arr[arr.length - 1 - i][0])
  }
  let unSorted = obj.unSorted.map(function(row){
    return row.slice(1, row.length)
  })
  return {
    sortedArr: obj.sortedArr.concat(sortedArr),
    unSorted: unSorted
  }
}
