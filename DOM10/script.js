let btnOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ul = document.querySelector('ul')

btnOne.addEventListener('click',function(){
    let txt = inputText.value
    let newele = document.createElement('li')
    newele.textContent = txt
    createButtons(newele)
    ul.appendChild(newele)
    inputText.value = ''
})


function createButtons(li){
    let p = document.createElement('button')
    p.textContent = 'Remove'
    p.classList.add('remove')
    li.appendChild(p)

    let q = document.createElement('button')
    q.textContent = 'Up'
    q.classList.add('up')
    li.appendChild(q)

    let r = document.createElement('button')
    r.textContent = 'Down'
    r.classList.add('down')
    li.appendChild(r)

}


ul.addEventListener('click',function(event){
    if (event.target.tagName == 'BUTTON'){
        if(event.target.className == 'remove'){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(event.target.className == 'up'){
            let li = event.target.parentElement
            let ulList = li.parentElement
            let preList = li.previousElementSibling
            if(preList){
                ulList.insertBefore(li,preList)
            }}
            else if(event.target.className == 'down'){
                let li = event.target.parentElement
                let ulList = li.parentElement
                let nextList = li.nextElementSibling
                if(nextList){
                    ulList.insertBefore(nextList,li)
                }    

    }
    }
})