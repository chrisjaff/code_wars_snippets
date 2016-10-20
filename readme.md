# Code Wars Snippets

Here's 4 exercises! They get progressively more difficult! Write some code that will help you test your functions. (Not actual tests but data to pass into your functions)

Write some psuedocode!
Test frequently!
Move Fast Break Things!

## Rental Car Calculator

After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a function that gives out the total amount for an integer in days(days).

```js
function rentalCarCost(days){
  // your code
}
```

## Clean up after your dog!

You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags, you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

Write a function that will accept 3 arguments: `field`, `bags`, `capacity`:

```js
function canCollectCrap(field, bags, capacity){
  // your code
}
```

For example:

```js
var demoFieldWithPoo = [
  [_,_,_,_,_,_],
  [_,_,_,_,@,_],
  [@,_,_,_,_,_],
]


canCollectCrap(demoFieldWithPoo, 2, 1)
//should return 'Clean'
canCollectCrap(demoFieldWithPoo, 1, 2)
//should return 'Clean'
canCollectCrap(demoFieldWithPoo, 1, 1)
//should return 'Cr@p'

var demoFieldWithDog = [
  [_,_,D,_,_,_],
  [_,_,_,_,@,_],
  [@,_,_,_,_,_],
]

canCollectCrap(demoFieldWithDog, 2, 1)
// should return 'Dog!!'
```

## Take a Ten Minute Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

> Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

Write a function that takes an array of directions(`n`, `s`, `w`, or `e`). It should return true if the walk takes exactly 10 minutes and returns you to the starting point. It should return false in every other case.

```js
function isValidWalk(directions){
  // your code
}
```

## Snail Sort

Given an `n x n` array, return the array elements arranged from outermost elements to the middle element, traveling clockwise. Write this function:

```js
function snail(array){
  // your code
}
```

It should interact like this:

```js
var array = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
// snail(array) should return [1,2,3,6,9,8,7,4,5]

array = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
]
// snail(array) should return [1,2,3,4,5,6,7,8,9]
```

This illustration might be the best way to understand what the function needs to do:

![http://www.haan.lu/files/2513/8347/2456/snail.png](http://www.haan.lu/files/2513/8347/2456/snail.png)
