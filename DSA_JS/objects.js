//creating an object
const person={
    name: 'kulsum Parveen',
    age: 20,
    city: 'Bengaluru'
}
console.log(person) //output:- { name: 'kulsum' age: 20, city: 'Bengaluru' }

////accessing object properties
const car = { brand: "Maruti suzuki", model: "Swift", year: 2021 };
console.log(car.model) //outpit:- Swift

////updating object property
const student = { name: "kulsum", grade: "A" };
console.log(student) // output:- { name: 'kulsum', grade: 'A' }
student.grade='A+';
console.log(student) //output:- { name: 'kulsum', grade: 'A+' } 

////Adding a New Property
const book = { title: "JavaScript Basics", author: "John Doe" };

book.pages=250;
console.log(book) //output:- { title: 'JavaScript Basics', author: 'John Doe', pages: 250 }

////Deleting a Property
const laptop = { brand: "Dell", price: 50000, color: "Black" };
console.log(laptop) //output:-{ brand: 'Dell', price: 50000, color: 'Black' }
delete laptop.color;
console.log(laptop) //output:- { brand: 'Dell', price: 50000}

////checking if a property exists
const  phone = { brand: "Samsung", model: "S21" };
console.log(phone) // output:- { brand: 'Samsung', model: 'S21' }
console.log(phone.hasOwnProperty('price')) //output:- false

////loop through an object
const user = { name: "john", age: 25, country: "India" };

for (i in user) {
    console.log(i + ": "+ user[i]);
} /*output:- name: john
age: 25
country: India  */


////object with function
const calculator={
    num1: 20,
    num2: 40,
    add: function(){
        return this.num1+this.num2
    }
}
console.log(calculator.add()) //output:- 60

////nested objects
const student = {
    name: "kulsum",
    age: 20,
    address: {
        city: "Bengaluru",
        pincode: 560077
    }
};
console.log(student); /*output:- {
    name: 'kulsum',
    age: 20,
    address: { city: 'Bengaluru', pincode: 560077 }
   } */

////convert object to array
const fruits = { apple: 5, mango: 3, banana: 8 };

const fArray = Object.entries(fruits);
console.log(fArray); // output:- [ [ 'apple', 5 ], [ 'mango', 3 ], [ 'banana', 8 ] ]

////merging two objects
const obj1 = { a: 1, b: 2 };
 const obj2 = { c: 3, d: 4 };
const merge=Object.assign({},obj1,obj2)
console.log(merge) // output:- { a: 1, b: 2, c: 3, d: 4 }

////object properties length
const MyObj = { 
    name: 'kulsum',
    age:20,
    gender:'female'}

    const countProp = obj =>{
       return Object.keys( MyObj).length;
    }
    console.log(countProp(MyObj)); // Output: 3


////converting array to object
const  colors = [["red","#FF0000"],["green", "#00FF00"],["blue", "#0000FF"]];
const colorObject = Object.fromEntries(colors);
console.log(colorObject);

////freezing
const config = { theme: "dark", language: "en" }
console.log(config) //output:- { theme: 'dark', language: 'en' }
Object.freeze(config)
config.theme = "light"
config.font= "Arial"
delete config.language

console.log(config); //output:- { theme: 'dark', language: 'en' }


////object destruction
const employee = { id: 101, name: "John", salary: 5000 };
const {name,salary}= employee;
console.log(employee);  // output:- { id: 101, name: 'John', salary: 5000 }

console.log(name); //John

console.log(salary); //output:- 5000