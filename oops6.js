age = 34
let human = {
    FirstName :'Pooja',
    LastName : 'Fulzele',
    age : 28,
    display : function(){
        console.log(this.age)
    }
}
console.log(human.age)
human.display()


// //lexical scope => function inside function ==> parent function variable are accessible into child ==> child variable 
// //are not accessible in parent

function add(){
    let a = 10
    let b = 20
console.log(a+b)

function add2(){
    let c= 30
    let d = 40
    console.log(c+d)
    console.log(a+b)
    console.log(a+b+c+d)


function add3(){
    let e= 50
    let f = 60
    console.log(e+f)
    console.log(c+d+e+f)
    console.log(a+b+c+d)
}
add3()
}
add2()
}
add()


/*function init(){
    let p = 5
    let q = 10
    console.log(p+q)
    console.log(r+s)// r is not defined

    function init2(){
        let r = 2
        let s = 6
        console.log(p+r)
    }
    init2()
}
init()*/



let m = 5
let n = 2
function display(){
    let a = 3
    let b = 8
    console.log(a+b)
    console.log(m+n)
    function display2(){
        let c = 4
        let d = 6
        console.log(c+d)
        console.log(a+b+c+d)
        function display3(){
            console.log(m+n)
        }
        display3()
    }
    display2()
}
display()



//Closures

function add4(){
    let a = 12
    let b = 14
    return a+b //final statement
    console.log(a+b+3)
    console.log('hello')
}

let s = add4()
console.log(s)


function add5(){
    let p = 15
    let q = 10
    return function(){
        console.log(p+q)
        console.log(p+q+5)
        console.log('hello')
}
    }
let result = add5()
console.log(result)
result()