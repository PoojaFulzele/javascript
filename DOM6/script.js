let bytagname = document.querySelector('h1')

bytagname.addEventListener('click',function(){
    bytagname.textContent = bytagname.textContent.toUpperCase()
    bytagname.style.color = 'red'
})