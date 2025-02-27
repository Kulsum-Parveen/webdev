// 1. Find the sum of all elements in an array
 //const number=[4,6,3,2,8]
//  const sumOfArray = (arr) => {
//     return arr.reduce((sum, num) => sum + num)
// }
// console.log(sumOfArray(number))

// 2. Find the Maximum num
    
//      const maxNumber = (arr) => {
//      return Math.max(...arr)
//  }
//  console.log(maxNumber(number))

// 3. Reverse an Array
// const reverseArray = (arr) => {
// return arr.reverse()
//  }
//  console.log(reverseArray(number))

// 4. Remove Duplicate from Array

//  const removeDuplicates = (arr) => {
//   return [...new Set(arr)];
//  };
//  console.log(removeDuplicates(number))

// 5. Check if an Array contains a specific element

//  const checkArray = (arr, ele) => {
//      return arr.includes(ele)
//  }

//  console.log(checkArray(number, 6))
//  console.log(checkArray(number, 34))

// 6. Merging of two arrays
// const num1 = [1, 2, 3, 4, 5];
//  const num2 = [6, 7, 8, 9, 10];

//  const mergeArray = (arr1, arr2) => {
//     return arr1.concat(...arr2);
//  }
//  console.log(mergeArray(num1, num2));

//7 . To find the first even number


//  const findEvenNumber = (arr) => {
//         return arr.find(arr => arr % 2 === 0)
//      }
//      console.log(findEvenNumber(number))
    
    
    // 8. Display even numbers 
//  const number = [1, 3, 4, 5, 6, 7, 8, 9, 10]
    
//  const evenNumber = (arr) => {
//      return arr.filter(num => num % 2 === 0);
//  }

//  console.log(evenNumber(number))

// 9. To display odd numbers
// const number = [2,3,4,5,6,7,8]
//  const oddNumber = (arr) => {
//      return arr.filter(num => num % 2 != 0);
//  }
//  console.log(oddNumber(number))

// 10. Find index of an element

//const number = [1, 3, 4, 5, 6, 7, 8, 9, 10]

//  const indexArray = (arr, ele) => {
//      return arr.indexOf(ele)
//  }
// console.log(indexArray(number, 2))

// 11. sorting of array

//const numbers = [5, 2, 9, 1, 5, 6];


//numbers.sort((a, b) => a - b);
//console.log("Ascending Order:", numbers); 

// 12. find smallest element in an array

/*const numbers = [5, 2, 9, 1, 5, 6];
const  smallest = Math.min(...numbers);
console.log("Smallest Element:", smallest);*/

//13. find second largest element

//14.  first largest number
/*const firstlarg = (c) =>{
    return Math.max(...a);
}
console.log(firstlarg(a))*/

// 15. flat
// const Arr = [1, [2, [3, [4, 5]]]];
// const fullFlatArr = Arr.flat(Infinity);
// console.log(fullFlatArr); 
 
// test question

//average
//  const numbers = [10, 20, 30, 40, 50];
// const sum = (arr)=>{
// let number = arr.reduce((acc, num) => acc + num, 0);
//   return number/5;
// }
// console.log("Average:", sum(numbers));


// merge two array with push method
//  const num1 = [1,2,3,4];
//  const num2 =[4,5,6,7];
//  const mergeArray =(arr1 ,arr2) => {
//      arr1.push(... arr2);
//       return arr1;
//  }
// console.log(mergeArray(num1,num2));

//addition of only odd numbers in an array

//  const number =[1,2,3,4,5,6,7,8,9,10];
//  const  oddNumbers = (arr)=> {
//      let odd = arr.reduce((sum ,num)  =>  num %2 !== 0 ?  sum + num :  sum ,0);
//    return odd;
//  }
//  console.log(oddNumbers(number));

 // Find the product of all elements in an array
// const number = [1, 3, 4, 5, 6, 7, 8, 9, 10]
// const proOfArray = (arr) => {
//     return arr.reduce((sum, num) => sum * num)
// }
// console.log(proOfArray(number))

// Remove Duplicate from Array

// const removeDuplicates = (arr) => {
//   return [...new Set(arr)];
// };
// console.log(removeDuplicates(number))

//even
// const numberr= [1, 3, 4, 5, 6, 7, 8, 9, 10];
    
// const evennNumber = (arr) => {
//     let num = arr.sort((a,b)=>a-b)
//     return num.find(arr => arr% 2 === 0)
// }

//  console.log(evennNumber(numberr));

//17.  convert an array of strings to upper case
//  const words = ["kulsum","Parveen"];
//  const uppercase = (arr) =>{
//    return  words.map(word => word.toUpperCase());
//  }  
//  console.log(uppercase(words));

//18. count the occurence of an array
// const array = [1,2,3,1,1,3,4,2,2];
// const count =(arr)=>{
//   return  arr.reduce((counts,num)=>{
//      counts[num]=(counts[num] || 0)+1 ;
//      return counts;
//     } ,{});
// };
// console.log(count(array));

//19.find the average of an array
// const numbers = [10, 20, 30, 40, 50];
//  const sum = (arr)=>{
//  let number = arr.reduce((acc, num) => acc + num, 0);
//   return number/5;
//  }
//  console.log("Average:", sum(numbers));


//20. intersection of two arrays
// const a1 = [1, 2, 3, 4, 5];
// const a2 = [3, 4, 5, 6, 7];
// const intersection = (a1, a2) => {
//   return a1.filter(item => a2.includes(item));
// };

// console.log(intersection(a1,a2)); //output:- [3,4,5]

//21. union of two arrays
// const a1 = [1, 2, 3, 4, 5];
// const a2 = [3, 4, 5, 6, 7];
// const union = (a1, a2) => {
//   return [...new Set([...a1, ...a2])]; 
// }
// console.log(union(a1, a2)); //output:-  [1, 2, 3, 4, 5, 6, 7]

//22. prime number function
