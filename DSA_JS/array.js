//array
/*const array =[1,2,3,4,5];
console.log(array)*/

//push and pop
// const nums = [2,3,5,7,9]
// nums.push(10)
// console.log(nums)
// nums.pop()
// console.log(nums)

//shift and unshift
// const names=["kulsum","aysha","yuman rida"]
// console.log(names)
// names.unshift("safina")
// console.log(names)
// names.shift()
// console.log(names)

// min max
// const num = [45,65, 29,99];
// const maxNum = Math.max(...num);
// console.log(maxNum)

// const minNum = Math.min(...num);
// console.log(minNum)


//slice and splice
// const numbers =[1,2,3,4,5,6,7,8,9,10]
// const array = numbers.slice(1,5)
// console.log(numbers);
// console.log(array);

// const array2  = numbers.splice(1,8)
// console.log(numbers);
// console.log(array2);



//sorting 
// const num = [3,8,7,23,76,89,2,4,56,87,92]
// const sortedArray = num.sort((a,b) => b-a)
// console.log(sortedArray)

//includes
//  const num = [3,8,7,23,76,89,2,4,56,87,92]
//  console.log(num.includes(4))

// indexOf 
//const num = [3,8,7,23,76,89,2,4,56,87,92]
//console.log(num.indexOf(8))

// join   comment
 // array.join()  comment
// convert array into string     comment
//console.log( typeof num.join())

// flat 
// array.flat(level)  syntax
//  const myArray =[1,2,4[2,4,5,[8,7[8[9]],3][8,7,9]]]
//console.log (myArray.flat(Infinity))


// merging of array
//const arr1 = ['safina', 'kulsum', 'ayesha']
//const arr2 = ['rida', 'sadiyah']

// 1. push
 //arr1.push(...arr2)
 //console.log(arr1)

// 2. concat - returns a new array

 //const newArray = arr1.concat(arr2)
 //console.log(newArray)

// 3. spread operator
// const newArray = [...arr1, ...arr2]
//  console.log(newArray)



// Looping of array.

// 1. for loop

//const numberArray = [2, 4, 6, 7, 2, 5, 7, 9,9,2,37]
// console.log(numberArray[0])
// console.log(numberArray[1])
// console.log(numberArray[2])
// console.log(numberArray[3])
// console.log(numberArray[4])
// console.log(numberArray[5])
// console.log(numberArray[6])
// console.log(numberArray[7])
 
// for(let i=0; i<numberArray.Length;i++){
//const element = numberArray[i];
//console.log(element)
//}


// 2. forEach

// numberArray.forEach((item) => {
 //            console.log(item)
//})


// Transforms each element of an array and returns a new array.
//  Used when you want to modify elements.

// const num1 = numberArray.map((item) => {
//      return item - 1
//  })

// console.log(num1)


// Filters elements based on a condition and returns a new array.
// Used when you want to select certain elements.

//  const num2 = numberArray.filter((item) => {
//      return item > 30
//  })
//  console.log(num2)


// Reduces the array to a single value (sum, product, etc.).

//  Used when you want a single output from multiple values.
// const totalNumber = numberArray.reduce((acc, curr) => {
//     return acc + curr
// })
// console.log(totalNumber)
