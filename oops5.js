//inheritance

//super class => parent class
// sub class=> child class
//extends

//single level => 1 parent 1 child
//multi level => more than 2
//hierarical=> 1 parent mutiple child

//Parent and Child without Constructor

/*class Grandfather {
    surName = 'Fulzele'
    money = 200000
    displayMoney() {
        console.log(`I have ${this.money}`)
    }
}

class Father extends Grandfather {
    home = 'Niwas'
    displayHome(){
        console.log(`I have my own home name ${'Niwas'}`)
    }
}

let Ram = new Grandfather()
console.log(Ram.money)
console.log(Ram.surName)
//console.log(Ram.home) ----->notPossible
Ram.displayMoney()


let Sham = new Father()
Sham.home
Sham.money
Sham.surName
Sham.displayHome()
Sham.displayMoney()*/

// Multilevel

/*class Grandfather{
    constructor(Sn,Mn){
        this.surname = Sn
        this.money = Mn
    }
    displayMoney(){
        console.log(this.money)
    }
}

class Father extends Grandfather{
    constructor(Sn,Mn,Hm){
        super(Sn,Mn)
        this.home = Hm
    }
    displayHome(){
        console.log(this.home)
    }
}
 class Son extends Father{
    constructor(Sn,Mn,Hm,Cr){
        super(Sn,Mn,Hm)
            this.car = Cr
    }
    displayCar(){
        console.log(this.car)
    }
 }

 let Akash = new Son('Fulzele','Niwas',500000,'Benz')
 console.log(Akash.car)
 console.log(Akash.money)
 console.log(Akash.home)
 console.log(Akash.surname)
 Akash.displayCar()
 Akash.displayHome()
 Akash.displayMoney()*/

//Hierarical
//one Parent multiple Children

class Mother {
    constructor(Sn, Mn) {
        this.surname = Sn
        this.money = Mn
    }
    displayMName() {
        console.log(this.money)
    }

}

class Son extends Mother {
    constructor(Sn, Mn, sName) {
        super(Sn, Mn)
        this.sonName = sName
    }
    displaySName() {
        console.log(this.sName)
    }
}

class Daughter extends Mother {
    constructor(Sn, Mn, dName) {
        super(Sn, Mn)
        this.daughterName = dName
    }
    displayDName() {
        console.log(this.dName)
    }
}

let pooja = new Daughter('Pooja', 'Fulzele', 800000)
pooja.surname
pooja.money
pooja.daughterName
pooja.displayDName()
pooja.displayMName()


let badal = new Son('Badal', 'Fulzele', 1000000)
badal.surname
badal.money
badal.sonName
badal.displayMName()
badal.displaySName()
