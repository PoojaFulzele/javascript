//object literals

//program 1
let Person = {
    firstName: 'pooja',
    lastName: 'fulzele',
    rollNo: 26,
    age: 25,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

Person.display()

//program 2

function Human(fn, ln, rn, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}

let ram = new Human('ram', 'kumar', 33, 85)
let charu = new Human('charu', 'sharma', 36, 94)
console.log(ram)
console.log(charu)

Human.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}
console.log(ram instanceof Human)
console.log(charu instanceof Human)

ram.display()
charu.display()

// Every object has one __proto__ === Parent.protoype
//console.log(ram.__proto__ === Human.prototype)

//Program 3

let names = ['Abhi', 'Meena', 'Ram', 'Krish']
console.log(names)
names.push('Neha')
console.log(names.__proto__ == Array.prototype)
Array.prototype.hello = function () {
    console.log('Hiiii')
}
names.hello()
console.log(names instanceof Array)

//Program 4
function Vehicle(cl, ty) {
    this.color = cl
    this.type = ty
    this.country = 'India'
    this.displayColor = function () {
        console.log(this.color)
    }
}

let maruti = new Vehicle('red','sedane')
let audi = new Vehicle('blue','suv')
console.log(maruti)
console.log(audi)

Vehicle.prototype.country = 'India'
console.log(maruti.country)
console.log(audi.country)
console.log(audi.hasOwnProperty('color'))
console.log(audi.hasOwnProperty('country'))

//Es6 class
class PersonD{
    constructor(fn,ln,rn,ag){
        this.firstName = fn
        this.lastName = ln
        this.rollNo = rn
        this.age = ag
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let sid = new PersonD('sid','mehar',12,16)
let sid2 = new PersonD('sid2','mehar2',18,14)
console.log(sid)
console.log(sid2)


//Object.create()

let obj = {
init:function(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln
    this.rollNo = rn
    this.age = ag
},
display:function(){
    console.log(this.firstName + this.lastName)

}
}

let amol = Object.create(obj)
console.log(amol)
amol.init('amol','rao',35,45)
console.log(amol)
amol.display()
