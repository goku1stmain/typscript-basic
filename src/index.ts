
//  basic types  
let id:number=5 // this basic type is integer 
let company:string='gokul' // this is type string
let ispublished:boolean=true // this is type boolean 
let x:any='hello' // this can be of any type like string or integer or boolean etc 
let age:number

age=30
// arrays
// let us say we need array of only number here we cannot push string inside the array 
let ids: number[]=[1,2,3,4,5,6,7,8]
// this type of intialization you can store any type of intialization 
let arr:any[]=[1,2,3,4,"GOKUL","hellow world"]
console.log(ids)

// tuple
// here you can specify particular type of datatype 
// so the in tuple we have to give particulay data type in partciluar place 
let person:[number,string,boolean]=[1,"gokul",true]
//tuple array 
let employee:[number,string][]
employee=[
    [1,"gokul"],
    [2,"hello"],
    [3,"1stmain"]
]


// unions 
//if you want particular variable to hold more than one then you use unions 
// so this below variable can store either the number and string 
let y: number|string=3


// Enum or enumerator type 
// basically allows set of named constants either numeric or string 
// in typescript it provides enum declarations for numbers and strings as well
// below is the typscript declaration for enum of type numbers
enum Directions{
    up=1,
    Down,
    left, 
    Right,

}

console.log(Directions.up)
console.log(Directions.Down)
console.log(Directions.left)
console.log(Directions.Right)

// enum declarations of type string 

enum Directions1{
    up="up",
    down="down",
    left="left",
    right="right"
}


console.log(Directions1.up)
console.log(Directions1.down)
console.log(Directions1.left)
console.log(Directions1.right)


// objects 


// normal way of assigning objects but in typescript we can assign values to this datatypes for each value we pass in 
// const user={
//     id:1,
//     name:"gokuljs",
// }

// const user:{
//     id:number,
//     name:string,
// }={
//     id:1,
//     name:"gokuljs",
// }
// console.log("working with objects")
// console.log(user.id)
// console.log(user.name)

//better way of doing this 
type User={
    id:number,
    name:string,
}

const user:User={
    id:1,
    name:"gokuljs"
}
user.id=200
user.name="asksjkajs"

console.log("working with objects")
console.log(user.id)
console.log(user.name)


// Type assertion
// completely telling compiler we have to treat and entity as an different type 
let cid :any=100000
// let customerId=<number> cid
let customerId=cid as number
console.log(customerId)


// using types in functions
// while passing parameter you have to mention which type you want 
function addNum(d:number,e:number){
    return d+e
}

console.log(addNum(10,20))


// when your function dont have return type then you will have return type of void 
function log(message:number|string):void{
    console.log(message)
}

// log("hello")
log(1)

// interfaces 