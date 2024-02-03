 class calculator{
//    addition(x,y){
//     console.log(x+y)
//    }
//    addition(x,y,z){
//     console.log(x+y+z)
//    }
//    addition(x,y,z,a){
//     console.log(x+y+z+a)
//    }
//   // same class , same method name , different signature ,overloading  
// 


addition(x,y,z,a) {
    if(x!= undefined && y!= undefined && z!= undefined && a!= undefined){
    console.log(x+y+z+a)
       }
     else if(x!= undefined && y!= undefined && z!= undefined){
        console.log(x+y+z)
     }  
     else if(x!= undefined && y!= undefined) {
        console.log(x+y)
     }
}
}

let c = new calculator()
c.addition(2,5)
c.addition(2,5,3)
c.addition(2,5,3,4)


class worldbank{
    save(){
        console.log('I m save from worldbank')
    }

    loan(){
        console.log('I m loan from worldbank')
    }
}

class sbi extends worldbank{
     // override 
    // different class , same method name and same signature
    save(){
        console.log('I m save from sbi')
    }
    loan(){
        console.log('I m loan from sbi')
    }
}

let s = new sbi()
s.loan()
s.save()