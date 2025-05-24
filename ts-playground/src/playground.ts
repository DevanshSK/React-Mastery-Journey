// # Typescript example
// type Person = {
//     name: string;
// }
// const person: Person = {
//     name: "John",
// }
// console.log(person.name);

//==========================================================================================

// # Annotation Examples
// let myName: string = "Devansh";         // Strings
// myName = "Another Name";
// console.log(myName)
// let favnumber: number = 7;              // Numbers
// favnumber += 2;
// console.log(favnumber);
// let isHard: boolean = false;            // Booleans
// console.log(isHard);

//==========================================================================================

// # TS Inferences
// Here we are infering the types!
let tech = "Typescript";
let favNumber = 8;
let tsHard = true;
console.log(tech, favNumber, tsHard);
console.log(typeof tech, typeof favNumber, typeof tsHard);
// Error
// tech = false;
// favNumber = "Hello";
// tsHard = 20;

//==========================================================================================

// # Any Type
// let color: any = "crimson";
// color = 20;
// color = true;
// color();
// color.toUpperCase();
// console.log(color);

//==========================================================================================

// # Functional Parameter Annotations
// Regular Function annotations
function addOne(num: number){
    return num + 1;
}
// const result = addOne(3);
// console.log(result);
// Arrow function annotations
const double = (x: number, y: number) => x * y;
// const res = double(2, 10);
// console.log(res);

//==========================================================================================

// # Default Params Value
function greet(person: string = "Anonymous"){
    return `Hello ${person}`;
}

// const res1 = greet();
// console.log(res1)
// const res2 = greet("Devansh");
// console.log(res2)

//==========================================================================================

// # Return Annotations - Regular
function double1(x: number): number {
    return x * x;
}

// const res = double1(2);
// console.log(res);

// # Return Annotations - Arrow
const double2 = (x: number): number => x * x;
// const res2 = double2(3);
// console.log(res2);

//==========================================================================================

// # Void type Example
function printMessage(message: string): void {
    console.log(`This is my message: ${message}`);
    // Error appears when returning anything.
    // return message;     // Type 'string' is not assignable to type 'void'.
}

printMessage("Hello, How are you?");

//==========================================================================================

// # Never Keyword
function throwError(msg: string): never {
	throw new Error(msg);
}

function infiniteLoop(): never {
	while(true) {}
}

let x: never;

function neverReturns(): never {
	while(true){}
}

// x = neverReturns();  
// throwError("Hi there");

//==========================================================================================

// # Array Types
const numbers: number[] = [1, 2, 3, 4];
const names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(numbers);

names.push("Devansh");
console.log(names);

//==========================================================================================

// # Multi Dimensional Arrays
const singleDi: number[] = [1, 2, 3, 4, 5, 6];

const matrix: number[][] = [
    [1, 2],
    [3, 4],
];

const triple: number[][][] = [
    [
        [1, 2],
        [3, 4],
    ],
]

// console.log(singleDi);
// console.log(matrix);
// console.log(triple);

//==========================================================================================

// # Objects In TypeScript

// type varName (annotation/type) = {property: value}

// const person: {firstName: string; lastName: string; age: number} = {
//     firstName: "John",
//     lastName:  "Doe",
//     age: 30,
// }

// // console.log(person);

// function printUser(): { name: string; age: number; location: string } {
//     return {
//         name: "Alex",
//         age: 19,
//         location: "USA",
//     };
// }

// console.log(printUser());

//==========================================================================================

// # Type ALiases

// type Person = {
//     name: string;
//     age: number;
// }

// function printPerson(person: Person){
//     console.log(`Name: ${person.name}, Age: ${person.age}`);
// }

// const myPerson: Person = {
//     name: "Alice",
//     age: 25,
// }

// printPerson(myPerson);

//==========================================================================================

// # Optional Properties.

// type Person = {
//     name: string;
//     age: number;
//     email?: string;
// }

// const alice: Person = { name: "Alice", age: 30 };
// const bob: Person = { name: "Bob", age: 25, email: "bob@example.com" };

//==========================================================================================

// # Readonly property

// type User = {
//     readonly name: string;
//     age: number;
//     email?: string;
// }

// const user: User = {
//     name: "Devansh",
//     age: 21,
// }

// user.name = "Devansh"

// console.log(user);

//==========================================================================================

// # Intersection Types

// type Person = {
//     name: string;
//     age: number;
// }

// type Employee = {
//     id: number;
//     title: string;
// }

// type PersonAndEmployee = Person & Employee;

// const office: PersonAndEmployee = {
//     name: "Alice",
//     age: 30,
//     id: 213,
//     title: "Manager",
// }

// console.log(office);

//==========================================================================================

// # Union Types

// let myVar: number | string;

// function foo(param: string | string[]){
//     // Function body.
// }

// interface MyInterface{
//     myProp: string | number;
// }

// type UserInfo = {
//     first: string;
//     last: string;
//     age: number;
// }

// type AccountDetails = {
//     email: string;
//     password: string;
// }

// let user: UserInfo | AccountDetails = {
//     email: "someone@gmail.com",
//     password: "test123",
// }

// let user1: UserInfo | AccountDetails = {
//     first: "Demo",
//     last: "User",
//     age: 22,
// }

// const items: (number | string)[] = [1, 5, 5, "Hello"];
// console.log(items)

//==========================================================================================

// # Literal Types

// let color: 'red' | 'blue' | 'green';
// color = "red";      // Valid
// // color = "yellow";   // Invalid

// let number: 1 | 2 | 3;
// number = 1;     // Valid
// // number = 4;     // Invalid

// let isTrue: true;
// isTrue = true;      // Valid
// // isTrue = false;     // Invalid

//==========================================================================================

// # Tuples

// let tuple: [string, number] = ["hello", 42];

// let [first, second] = tuple;

// console.log(tuple[0]);      // "hello"
// console.log(tuple[1]);      // 42
// console.log(first);      // "hello"
// console.log(second);      // 42

// const products: (number | string)[] = ["item1", 12];
// console.log(products);

// const games: [string, string, string] = ["Game1", "Game2", "Game3"];
// const games1: [string, number, boolean] = ["Game1", 2, true];
// console.log(games);
// console.log(games1);

//==========================================================================================

// # Enums

// Assigns automatic numeric values.
// enum WeatherConditions {
//     Sunny,   // 0
//     Cloudy,  // 1
//     Rainy,   // 2
//     Snowy,   // 3
// }

// enum WeatherConditions {
//     Sunny = "sunny",
//     Cloudy = "cloudy",
//     Rainy = "rainy",
//     Snowy = "snowy",
// }

// const currentWeather = WeatherConditions.Rainy;
// console.log(`The current weather is ${currentWeather}`);

//==========================================================================================

// # Classes and OOPS

// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Person {
//     readonly name: string;
//     readonly age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }

// const person = new Person("Devansh", 21);
// console.log(person);


// ## Access Modifiers
// class Animal {
//     public name: string;
//     private age: number;
//     protected species: string;

//     constructor(name: string, age: number, species: string){
//         this.name = name;
//         this.age = age;
//         this.species = species;
//     }

//     public getName(): string {
//         return this.name;
//     }

//     protected getAge(): number {
//         return this.age;
//     }

//     protected getSpecies(): string {
//         return this.species;
//     }
// }

// class Dog extends Animal {
//     constructor(name: string, age: number){
//         super(name, age, "Canine");
//     }

//     public getInfo(): string {
//         return `${this.getName()} is a ${this.getSpecies()} and is a ${this.getAge()} years old.`
//     }
// }

// ## Getters and Setters

// class MyClass {
//     private _myProperty: number = 0;

//     get myProperty() : number {
//         return this._myProperty;
//     }
    
//     set myProperty(v : number) {
//         if(v < 0){
//             throw new Error("Value cannot be negative");
//         }

//         this._myProperty = v;
//     }
// }

// const myInstance = new MyClass();
// myInstance.myProperty = 22;
// console.log(`Current Value: ${myInstance.myProperty}`)

//==========================================================================================

// // # Interfaces

// // Interface Definition
// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// // Usage
// const examplePerson: Person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
// }

// Interface for Functions
// interface MathOperation{
//     (x: number, y: number): number;
// }

// // Usage
// const add: MathOperation = (a, b) => a + b;
// const subtract: MathOperation = (a, b) => a - b;

// console.log(add(5, 3));
// console.log(subtract(7, 3));

// Interface For Classes
// interface Vehicle {
//     start(): void;
//     stop(): void;
// }

// // Class implementation for the interface
// class Car implements Vehicle {
//     start(){
//         console.log("Car Started");
//     }
    
//     stop(){
//         console.log("Car Stopped");
//     }
// }

// Usage
// const myCar = new Car();
// myCar.start();
// myCar.stop();

// Another Example
// interface Song{
//     songName: string;
//     singerName: string;
//     printSongInfo(songName: string, singerName: string): string;
// }

// const song1: Song = {
//     songName: "Natural",
//     singerName: "Imagine Dragons",
//     printSongInfo: (songName, singerName) => {
//         return `Song: ${songName}, Singer: ${singerName}`;
//     }
// }

// console.log(song1.printSongInfo(song1.songName, song1.singerName));

// Borrowing fields/methods from parent interfaces.
// interface MovieDetails{
//     readonly name: string;
//     ratings: number;
//     printMovieInfo(name: string, price: number, ratings: number): string | number;
// }

// interface MovieGenra extends MovieDetails {
//     genra: string;
// }

// const movie1: MovieGenra = {
//     name: "Star Wars",
//     genra: "Action",
//     ratings: 8.9,
//     printMovieInfo(name, price, ratings){
//         return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
//     }
// }

// console.log(movie1.printMovieInfo(movie1.name, 500, movie1.ratings));


//==========================================================================================

// # Generics

// // Regular Functions
// const printString = (x: string) => console.log(x);
// const printNumber = (x: number) => console.log(x);
// const printBoolean = (x: boolean) => console.log(x);

// printString("Hello");
// printNumber(22);
// printBoolean(true);

// // Generic Function
// function printInfo<T>(x: T): T {
//     console.log(x);
//     return x;
// }

// const str = printInfo<string>("Hello");     // Hello
// const num = printInfo<number>(23);          // 23
// const bool = printInfo<boolean>(true);      // true


// Example 1.
// Original regular function
// function printNumber(item: number, defaultValue: number): [number, number]{
//     return [item, defaultValue];
// }
// function printString(item: string, defaultValue: string): [string, string]{
//     return [item, defaultValue];
// }
// function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean]{
//     return [item, defaultValue];
// }

// const num = printNumber(12, 20);
// console.log(num);
// const str = printString("Heloo", "World");
// console.log(str);
// const bool = printBoolean(true, false);
// console.log(bool);



// Generics Examples.
// function uniqueDataTypeFunc<Type>(item: Type, defaultValue: Type): [Type, Type] {
//     return [item, defaultValue];
// }

// const num = uniqueDataTypeFunc<number>(1, 44);
// const str = uniqueDataTypeFunc<string>("Helo", "World");
// const bool = uniqueDataTypeFunc<boolean>(true, false);

// console.log(num, str, bool);

// function differentDataTypeFunc<A, B>(item: A, defaultValue: B): [A, B] {
//     return [item, defaultValue];
// }

// const num2 = differentDataTypeFunc<number, boolean>(1, false);
// const str2 = differentDataTypeFunc<string, string>("Helo", "World");
// const bool2 = differentDataTypeFunc<string, number>("true", 22);

// console.log(num2, str2, bool2);


// Using interface with generics
// function uniqueDataTypeFunc<Type>(item: Type, defaultValue: Type): [Type, Type] {
//     return [item, defaultValue];
// }

// interface Dog{
//     name: string;
//     breed: string;
// }

// const dog1 = uniqueDataTypeFunc<Dog>(
//     {name: "Buddy", breed: "Labrador"},
//     {name: "Sammy", breed: "Unknown"},
// );

// console.log(dog1)



// // Example 1:  Get Random Key-Value Pairs
// function getRandomKeyValuePair<T>(obj: {[key: string] : T} ) : {key: string, value: T} {
    
//     const keys = Object.keys(obj);
//     const randKey = keys[Math.floor(Math.random() * keys.length)];

//     return {key: randKey, value: obj[randKey]};
// }

// const stringObj = { a: "apple", b: "banana", c: "cherry" }
// const res = getRandomKeyValuePair<string>(stringObj);
// console.log(res);

// const numberObj = { one: 1, two: 2, three: 3 }
// const resNum = getRandomKeyValuePair<number>(numberObj);
// console.log(resNum);



// // Example 2: Filtering an array based on the condition.
// function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
//     return array.filter(condition);
// }

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNums = filterArray<number>(numberArray, (num) => num % 2 === 0);
// console.log(evenNums);

// const stringArr = ["apple", "banana", "cherry", "date"];
// const shortWords = filterArray<string>(stringArr, (word) => word.length < 6 );
// console.log(shortWords);

// interface Fruit{
//     name: string;
//     color: string;
// }

// const fruitArray: Fruit[] = [
//     { name: "Apple", color: "Red" },
//     { name: "Banana", color: "Yellow" },
//     { name: "Cherry", color: "Red" },
// ];
// const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "Red");
// console.log(redFruits);


// // Example 3: Generic Functions with multiple values.
// function reversePair<T, U>(value1: T, value2: U): [U, T]{
//     return [value2, value1];
// }

// const reversedPair = reversePair("Hello", 20);
// console.log(reversedPair);



// // Generics with Classes
// class Box<T> {
//     private content: T;

//     constructor(initialValue: T){
//         this.content = initialValue;
//     }

//     getContent(): T {
//         return this.content;
//     }

//     setContent(newContent: T): void {
//         this.content = newContent;
//     }
// }

// const secretBox = new Box<string>("Hello TS");     
// console.log(secretBox.getContent());                // Hello TS
// secretBox.setContent("New Content Added");
// console.log(secretBox.getContent());                // New Content Added


// const luckyBox = new Box<number>(20);     
// console.log(luckyBox.getContent());                // 20
// luckyBox.setContent(7);
// console.log(luckyBox.getContent());                // 7


//==========================================================================================

// ### Type Narrowing

// ## 1. Type Guards

// // Define a union type
// type MyType = string | number;

// // Example function with type guard
// function exampleFunction(value: MyType) : void {
//     // Type guard using typeof
//     if(typeof value === "string") {
//         // Within the block, TypeScript knows that 'value' is a string.
//         console.log(value.toUpperCase());
//     } else {
//         // Within the block, TypeScript knows that 'value' is a number.
//         console.log(value.toFixed(2));
//     }
// }

// // Example Usage
// exampleFunction("Hello")    // HELLO
// exampleFunction(42)    // 42.00


// ## 2. instanceof Operators

class Dog{
    bark(): void {
        console.log("Woof!");
    }
}

class Cat{
    meow(): void{
        console.log("Meow!");
    }
}

// Example Function with instanceof type guard
function animalSound(animal: Dog | Cat): void {
    if(animal instanceof Dog) {
        // TS knows 'animal' here is instance of Dog.
        animal.bark();
    } else {
        // TS knows 'animal' here is instance of Dog.
        animal.meow();
    }
}

// Example usage
const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog);     // Woof!
animalSound(myCat);     // Meow!


// ## 3. Intersection Types
type Employee = {
    id: number;
    name: string;
}

type Manager = {
    dept: string;
    role: string;
}

// Create an intersection type
type ManagerWithEmployeeType = Employee & Manager;

// Example usage
const manager: ManagerWithEmployeeType = {
    id: 123,
    name: "John Doe",
    dept: "Engineering",
    role: "Team lead",
}

console.log(manager.id);
console.log(manager.name);
console.log(manager.dept);
console.log(manager.role);
