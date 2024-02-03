//object literals

/*let karan = {
    FirstName: 'karan',
    LastName: 'singh',
    age: 40,
    rollNo: 85,
    skills: 'JS'
}

//add
karan.language = 'Hindi'
console.log(karan)

//update
karan.LastName = 'Grover'
console.log(karan)

//retrive
console.log(karan.age)

//delete
delete karan.skills
console.log(karan)

//template
//1. function constructor
//2. Es6 class  => class => 2015
//3. Object.create()

//function constructor
function Person(fn, ln, ag, rn, sk) {
    this.FirstName = fn
    this.LastName = ln
    this.age = ag
    this.rollNo = rn
    this.skills = sk

}

let pooja = new Person('pooja', 'fulzele', 28, 10, 'javascript')
console.log(pooja)

let ram = new Person('ram', 'kapur', 34, 45, 'python')
console.log(ram)*/


//Es6 class
//without constructor / with constructor

class Person {
    firstName = 'pooja'
    lastName = 'fulzele'
    age = 28
    rollNo = 12
    skills = 'js'

}

let priya = new Person()
console.log(priya)

let riya = new Person()
console.log(riya)


class Human {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNumber = undefined
    skills = undefined
}

let sham = new Human()
console.log(sham)

sham.firstName = 'sham'
sham.lastName = 'kumar'
sham.age = 44
sham.rollNumber = 55
sham.skills = 'java'
console.log(sham)


//with Constructor()
class Student {
    constructor(fn,ln,ag,rn,sk,){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
        this.skills = sk

    }
}

let dhruv = new Student('dhruv', 'sharma',33,74,'js')
console.log(dhruv)

let neha = new Student ('neha','kumari',25,65,'c#')
console.log(neha)