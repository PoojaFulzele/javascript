let btnOne = document.querySelector('button')
let bytagname = document.querySelector('h1')
let byinput = document.querySelector('input')

btnOne.addEventListener('click',function(){
     let inputtext = byinput.value
     bytagname.style.color = inputtext
     byinput.value = ''

})