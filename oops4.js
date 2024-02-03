class Bank{
    constructor(fn,bal){
     this.FullName = fn
     this.balance = bal
     this.transaction  = []
    }

    withDrawl(amnt){
        if(this.bal > amnt){
            this.bal = this.bal-amnt
            this.transaction.push(-amnt)
            return this.bal
        }
        else{
            console.log('Insufficient Fund')
        }
    }
    deposit(amnt){
         this.bal = this.bal + amnt
         this.transaction.push(amnt)
         return this.bal
    }

    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }
}


let Pooja = new Bank('Pooja Fulzele',10000000)
Pooja.deposit(10000)
Pooja.deposit (10000)
Pooja.deposit (10000)
Pooja.deposit (10000)
Pooja.deposit (10000)
Pooja.withDrawl (100)
Pooja.withDrawl (100)
Pooja.withDrawl (100)
Pooja.withDrawl (100)
Pooja.withDrawl  (100)
console.log(Pooja.lastFiveTransaction())

