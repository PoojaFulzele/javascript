//Map==> datatype
//need

//obj => key value => key => string
//map => key value => key any datatype

let a = new Map()
console.log(a)

//set()
a.set("firstName","Pooja")
a.set(32,"rollNo")
a.set(true,"is studying")
console.log(a)

//size
console.log(a.size)

//has()
console.log(a.has(32))

//get()
//console.log(a.get("is studying")) ==>it takes only key
console.log(a.get(true))

//delete()
//console.log(a.delete(32))
//console.log(a)

//clear()
//a.clear()
//console.log(a)

//foreach()
a.forEach(function(val,key){
    console.log(key,val)
})


//keys()
console.log(a.keys())

//for loop key
for(let key of a.keys()){
    console.log(key)
}

//for loop values
for(let val of a.values()){
    console.log(val)
}

//entries()
console.log(a.entries())
for(let [key,val] of a.entries()){
    console.log(key,val)
}
