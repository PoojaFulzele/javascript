//Actual diff between let var const
//  let x = 40
//  console.log(x)
//  x = 50 // update
//  console.log(x)
//  console.log(x)


//  const y = 10
//  console.log(y)
//  y = 5
//  console.log(y)

 //Program 1

// {} //block

// let a={} // empty object

//let const ==> block scope

// {
//     let v = 8
//     console.log(v)
// }
// console.log(v)// v is not defined


//Program 2

// let u = 20
// {
//     let u = 10
//     console.log(u)//10
// }
// console.log(u)//20

//Program 3

// let m = 74
// {
//     console.log(m)
//     m = 12
//     console.log(m)
// }
// console.log(m)

//Program 4
// {
//     const a = 6
// }
// console.log(a)// not defined

// let b 
// console.log(b)//undefined

// console.log(c)//not defined

//Program 5
// const k = 23
// {
//     console.log(k)
//     k = 52  // assignment to the const variable
//     console.log(k)
// }
// console.log(k)


//Program 6
{
    var c = 25
}
console.log(c)
//let and const having block scope and var dont have block scope

//var having function scope


//Program 7

// var a = 45
// console.log(a)//45
// function add(){
//     var a = 20
//     console.log(a)//20
// }
// console.log(a)//45
// add()
// console.log(a)//45

// var s1=100
// s1=200
// console.log(s1)

/*let d1=20
let d1=30
console.log(d1)*/

//const u1=200
 //const u1=40

 //var g1=30
//var g1=50
 //console.log(g1)


 //Program 8
 var a = 45
console.log(a)//45
function init(){
     a = 20 //update
    console.log(a)//20
}
console.log(a)//45
init()
console.log(a)//20


//Program 9
function initone(){
    var n = 28
    console.log(n)
}
initone()
console.log(n)