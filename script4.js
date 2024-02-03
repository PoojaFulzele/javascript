//rest parameter

//Program 1
function addition(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return acc+el

    },0)
}
let a = addition(11,22,33,44,55,66,77)
console.log(a)


// rest operator 
// 34,55,66,22,33,44,555  ====> [34,55,66,22,33,44,555] 

// spread operator
// [11,22,33,44]          =====>  11,22,33,44


//Program 2
let marks = [12,10,36,16,25,42]
function addB(a,b,c){
    console.log(a+b+c)//12+10+36
}
addB(...marks)

//Program 3
let numA = [1,2,3,4]
let numB = [5,6,7,8]
let b = [...numA,...numB]
console.log(b)

//Program 4
let info = {
    firstName : 'pooja',
    lastName : 'fulzele'
}

let address = {
    country : 'India',
    state : 'MH'
}

let c = {...info,...address}
console.log(c)


///Program 5
info = {
    firstName : 'pooja',
    lastName : 'fulzele',
    age: 28,
    rollNo: 24
}
function ifo({firstName,...info}){
    console.log(firstName)
    console.log(info)
}
ifo(info)


//Program 6
function abvCompare(compare,...vals){
    console.log(compare)
    console.log(vals)
    let abv40 = vals.filter(function(el,index,arr){
        return el>compare
    })
    console.log(abv40)
}
abvCompare(400,11,34,55,22,434,55,66,77,888,99,990)
abvCompare(200,11,34,55,220,434,55,66,77,888,99,990)


//Program 7
let x = 10
let y = x

 y = 25
 console.log(x)
 console.log(y)

 let numbers = [85,56,96,24]
 numberA = numbers
 numberA[1] = 36
 console.log(numberA)
 console.log(numbers)


 let names = ['riya','piya','tiya','miya']
 let m = [...names]
 console.log(names)
 console.log(m)
 m[2] = 'rina'
 console.log(names)
 console.log(m)


 let team ={
    '1': 'admin',
    '2': 'support'
 }
//  let mm = team
//  mm['1'] = 99
//  console.log(team)
//  console.log(mm)

 let mm2 = {...team}
 mm2['1'] = 90
 console.log(mm2)
 console.log(team)