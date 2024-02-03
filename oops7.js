//Actual diff between arrow function and function expression

//types of function
//1. function declaration
//2. function expression
//3. arrow function

/*let greeting = function(){
    console.log('Welcome')
}

let greeting2 = () => {
    console.log('Welcome')
}

function greeting3(){
    console.log('Welcome')
}*/

// let add = (a,b) => a+b
// let sum = add(10,2)
// console.log(sum)

// let x = 10
// console.log(x)//10
// console.log(window.x)// window is not defined

//WINDOW
// var y = 50
// console.log(y)
// console.log(window.y)


//Program 1

/*let Person = {
   FirstName :'Pooja',
   LastName : 'Fulzele',
   age : 28,
   info : function(){
    console.log(this == Person)//true
    console.log(this.FirstName+this.LastName)//PoojaFulzele

    function greeting(){
        console.log(this == Person)//false
        console.log(this == window)//true
        console.log(`Welcome ${this.FirstName}`)//Welcome undefined
    }
    greeting()
   }
}

console.log(Person.info)
Person.info()*/


//Program 2

/*var FirstName = 'Jai'
let Person = {
    FirstName :'Pooja',
    LastName : 'Fulzele',
    age : 28,
    info : function(){
     console.log(this == Person)//true
     console.log(this.FirstName+this.LastName)//PoojaFulzele
 
     let greeting = function() {
         console.log(this == Person)//false
         console.log(this == window)//true
         console.log(`Welcome ${this.FirstName}`)//Welcome undefined
     }
     greeting()
    }
 }
 
 console.log(Person.info)
 Person.info()*/


 //Program 3

//  var FirstName = 'Jai'
//  let Person = {
//     FirstName :'Pooja',
//     LastName : 'Fulzele',
//     age : 28,
//     info : function(){
//      console.log(this == Person)//true
//      console.log(this.FirstName+this.LastName)//PoojaFulzele
 
//      let greeting = () => {
//          console.log(this == Person)//true
//          console.log(this == window)//false
//          console.log(`Welcome ${this.FirstName}`)//Welcome Pooja
//      }
//      greeting()
//     }
//  }
 
//  console.log(Person.info)
//  Person.info()


//Program 4
// let Person = {
//     FirstName :'Pooja',
//     LastName : 'Fulzele',
//     age : 28,
//     info : () => {
//      console.log(this == Person)//false
//      console.log(this == window)//true
//      console.log(this.FirstName+this.LastName)//undefined+undefined = NaN
 
//      let greeting = () => {
//          console.log(this == Person)//false
//          console.log(this == window)//true
//          console.log(`Welcome ${this.FirstName}`)//welcome undefined
//      }
//      greeting()
//     }
//  }

//  console.log(Person.info) //print
//  Person.info() //call

 //Program 5
 let Person = {
    FirstName :'Pooja',
    LastName : 'Fulzele',
    age : 28,
    info : function() {
     console.log(this == Person)//true
     console.log(this == window)//false
     console.log(this.FirstName+this.LastName)//PoojaFulzele
 
     let greeting = () => {
         console.log(this == Person)//true
         console.log(this == window)//false
         console.log(`Welcome ${this.FirstName}`)//welcome Pooja
     }
     greeting()
    }
 }

 console.log(Person.info) //print
 Person.info() //call
