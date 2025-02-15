const ImmutableEmployee = require("./employee");
const minPlatforms=require("./minPlatforms");
const sortBalls= require("./sortBalls"); 
const sortedSquares =require("./sortedSquares");
const sortMapByValue =require("./sortMapByValue");



const emp = new ImmutableEmployee("Alice", "EMP001", "2024-01-10", [
  { city: "New York", zip: "10001" },
  { city: "Los Angeles", zip: "90001" }
]);

console.log(emp);


const arr= ["9:00", "9:40", "9:50", "11:00", "15:00", "18:00"]
const dep = ["9:10", "12:00", "11:20", "11:30", "19:00", "20:00"]
console.log(minPlatforms(arr, dep)); 


let balls = ['R', 'G', 'B', 'G', 'G', 'R', 'B', 'B', 'G'];
console.log(sortBalls(balls)); 


let num = [-12, -8, -7, -5, 2, 4, 5, 11, 15];
console.log(sortedSquares(num));




const inputMap = new Map([
    [101, "John Doe"],
    [102, "Jane Smith"],
    [103, "Peter Johnson"]
  ]);
  
  const sortedObject = sortMapByValue(inputMap);
  console.log(sortedObject);
