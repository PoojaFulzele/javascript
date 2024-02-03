//object literals
 let shraddha = {
    firstName : 'Shraddha',
    lastName : 'Fulzele',
    rollNo : 10,
    age : 15,
 displayName : function (){
    console.log(this.firstName + this.lastName)
}

 }
 console.log(shraddha)
 console.log(shraddha.displayName)
 shraddha.displayName()


 //ES6 
//without constructor
//with constructor
//with function
//set and get keyword

//1. without constructor

class Person {
    firstName
    lastName
    skill
    displayName(){
        console.log(this.firstName + this.lastName)
  
    }
    
}

let pooja = new Person()
console.log(pooja)
pooja.firstName = 'Pooja'
pooja.lastName = 'Fulzele'
pooja.skill = 'js'
console.log(pooja)

//2.with constructor

class PersonB {
    constructor(fn,ln,sk){
        this.firstName = fn
        this.lastName = ln
        this.skill = sk
    }
    displayName(){
    console.log(this.firstName + this.lastName)
}

}
let kiya = new PersonB('kiya','nelkar','py')
console.log(kiya)
kiya.displayName()

//3. with function

class PersonC{
    setfirstName(fn){
        this.firstName = fn
    }
    setlastName(ln){
        this.lastName = ln
    }
    setskill(sk){
        this.skill = sk
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amit = new PersonC
console.log(amit)
console.log(amit.firstName)
amit.setfirstName = 'Amit'
amit.setlastName = 'Jadhav'
amit.setskill = 'java'
console.log(amit)
amit.displayName()

//4. by using set and get keywords

class PersonD{
    set firstName(fn){
        this.first_name = fn
    }
    get firstName(){
        return this.first_name
    }
    set lastName(ln){
        this.last_name = ln
    }
    get lastName(){
        return this.last_name
    }
    set skill(sk){
        this.skills = sk
    }
    get skill(){
        return this.skills
    }
    displayName(){
        console.log(this.first_name+this.last_name)
    }
}

let manav = new PersonD
console.log(manav)
manav.firstName = 'Manav'
manav.lastName = 'Kumar'
manav.skill = 'selenium'
console.log(manav)
manav.displayName()




