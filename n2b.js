// 2B

// 1
// SQUARE NUMBERS
let list = [72,34,67,90,2,34,55]
let squaredNumbers = []

function squareNumbers (array, secondArray) {
    array.forEach( element => {
        secondArray.push(element*element)
    });
    console.log(secondArray)
}
squareNumbers(list, squaredNumbers);


// 2
// SQUARE NUMBERS THEN ARRANGE THEM
let listInAscendingOrder = []
function arrangeListInAscendingOrder (array, secondArray) {
    squareNumbers(array.sort(), secondArray)
} 
arrangeListInAscendingOrder(list, listInAscendingOrder);


// 3
// arrangeListInDescendingOrder
let listInDescendingOrder = []
function arrangeListInDescendingOrder (array, secondArray) {
    squareNumbers(array.sort().reverse(), secondArray)
} 
arrangeListInDescendingOrder(list, listInDescendingOrder);


// 4
// get number divisible by 5 from array
let numbersList = [1, 5, 22, 25, 30, 34, 51, 100, 43, 56, 35, 29]
let numbersDivisibleByFive = []
for (n of numbersList){
    if (n % 5 == 0){
        numbersDivisibleByFive.push(n)
    }
}
numbersDivisibleByFive.forEach(alert)


// 5
// check if a string is in an array
function stringChecker (item , listOfItems) {
    console.log(listOfItems.findIndex(i => i == item))
}
stringChecker("iphone", ["android", "google phone", "iphone"])


// 6
// get an arrray of even numbers from a normal array
let listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listOfEvenNumbers = [];

for(let n of listOfNumbers){
    if(n % 2 == 0){
        listOfEvenNumbers.push(n)
    }
}
console.log(listOfEvenNumbers)


// 7
// get an arrray of odd numbers from a normal array
let listOfNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listOfOddNumbers = [];

for(let n of listOfNumbers){
    if(n % 2 == 1){
        listOfOddNumbers.push(n)
    }
}
console.log(listOfOddNumbers)


// 8
// get the average of numbers
function getAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  
    const average = sum / numbers.length;
  
    console.log(average)
  }

getAverage([1,2,3,4,5])


// 9
// find the median of a set of numbers
function findMedian(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
  
    const middleIndex = Math.floor(sortedNumbers.length / 2);
  
    if (sortedNumbers.length % 2 !== 0) {
       return alert(sortedNumbers[middleIndex])
    }
    
    const middleElements = sortedNumbers.slice(middleIndex - 1, middleIndex + 1);
    return alert((middleElements[0] + middleElements[1]) / 2) 
}

findMedian([2,3,4,4,5,5,6,6,7])


// 10
// change sentence to titlecase
function changeArrayToTitleCase(words) {
    let wordsInTitleCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    alert(wordsInTitleCase);
  }

changeArrayToTitleCase(["this", "is"])