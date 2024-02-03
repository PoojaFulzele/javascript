let bytagname = document.querySelector('h1')
let bybutton = document.querySelector('button')

bybutton.addEventListener('click', function(){
    bytagname.textContent = bytagname.textContent.toUpperCase()
    bytagname.style.color = 'brown'
})