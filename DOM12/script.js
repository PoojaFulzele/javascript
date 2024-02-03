//<h1 id="one" class="two three four" name = "nm">Heading</h1>

let id = document.querySelector('#one')
let Class = document.querySelector('.two')
let Tagname = document.querySelector('h1')
let Cf = document.querySelector('h1[name="nm"]')

console.log(id)
console.log(Class)
console.log(Tagname)
console.log(Cf)

console.log(document.querySelector('li'))
let node = document.querySelectorAll('li')
console.log(node)

for(let i = 0 ; i< node.length; i++){
    console.log(node[i].textContent)
if(i%2==0){
    node[i].style.color = "red"
}
else{
    node[i].style.color = "blue"
}
}


//<h1 id="one" class="two three four" name = "nm">Heading</h1>

let getid = document.getElementById('one')
console.log(getid)//html element

let getclass = document.getElementsByClassName('two')
console.log(getclass)//html collection

let gettagName = document.getElementsByTagName('h1')
console.log(gettagName)//html collection

let getName = document.getElementsByName('nm')
console.log(getName)//node list

console.log(getid.className)
console.log(getid.classList)

getid.classList.remove('two')
console.log(getid)

getid.classList.toggle('five')
console.log(getid)

getid.classList.toggle('five')
console.log(getid)

console.log(getid.getAttribute('id'))
console.log(getid.getAttribute('class'))

getid.setAttribute('type','input')
console.log(getid)
