let bytagname = document.querySelector('h1')
console.log('h1')

let byCF = document.querySelector('h1[name = "nm"]')
console.log('byCF')

let byid = document.querySelector('#one')
console.log('byid')

let byclass = document.querySelector('.class')
console.log('byclass')

byCF.addEventListener('click', function(){
    byCF.textContent = 'Pooja';
    byCF.style.color = 'purple'
})