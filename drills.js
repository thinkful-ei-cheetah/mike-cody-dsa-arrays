// 5. URLify a string
function urlify(url) {
  return url.split(' ').join('%20');
}
// console.log(urlify('tauhida parveen'));
// console.log(urlify('www.thinkful.com / tauh ida parv een'));

// 6. Filtering an array
const oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterArray(arr) {
  let newArray = [];
  for(let i = 0; i < oldArray.length; i++) {
    if(oldArray[i] >= 5) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
// console.log(filterArray(oldArray));

// 7. Max sum in the array
const arr = [4, 6, -3, 5, -2, 1];
function maxSum(arr) {
  let num = 0;
  let nextNum = 0;

  for(let i = 0; i < arr.length; i++) {
    nextNum = 0;
    for(let j = 0; j < arr.length; j++) {
      nextNum += arr[j];
      if(nextNum > num) {
        num = nextNum;
      }
    }
  }
  return num;
}
// console.log(maxSum(arr));

// using Math.max method
function maxSum(arr) {
  let currentSum = 0;
  let maxSum = 0;
  for(let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    currentSum = Math.max(currentSum + currentNumber, 0);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// 8. Merge arrays
const arr1 = [1, 3, 6, 8, 11];
const arr2 = [2, 3, 5, 8, 9, 10];
function merge(arr1, arr2) {
  let result = [...arr1, ...arr2];
  result.sort(function(a, b) {
    return a - b;
  })
  console.log(result);
}
// console.log(merge(arr1, arr2));

// 9. Remove characters
const sentence = 'Battle of the Vowels: Hawaii vs. Grozny';
const vowels = ['a', 'e', 'i', 'o', 'u'];
function removeChar(sentence, vowels) {
  let newString = '';
  for(let i = 0; i < sentence.length; i++) {
    if(!vowels.includes(sentence[i])) {
      newString += sentence[i];
    }
  }
  return newString;
}
// console.log(removeChar(sentence, vowels));

// 10. Products
function products(arr) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    let num = 1;
    for(let j = 0; j < arr.length; j++) {
      if (i !== j) {
        num *= arr[j];
      }
    }
    result.push(num);
  }
  return result;
}
// console.log(products([1, 3, 9, 4]));

// 11. 2D array
let twoD = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

function twoDArray(arr) {
  let oneArray = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i][j] === 0) {
        oneArray.push([i, j]);
      }
    }
  }
  for(let i = 0; i < oneArray.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      for(let k = 0; k < arr[j].length; k++) {
        arr[oneArray[i][0]][k] = 0;
        arr[j][oneArray[i][1]] = 0;
      }
    }
  }
  return arr;
}
// console.log(twoDArray(twoD));

// 12. String rotation
function rotation(str1, str2) {
  return (str1 + str1).includes(str2);
}
// console.log(rotation('amazon', 'azonma'));
// console.log(rotation('amazon', 'azonam'));