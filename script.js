let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let count = document.querySelector('.count')
let cnt = 0

minus.addEventListener('click', () =>{
    cnt --
    count.value = cnt
})

plus.addEventListener('click', () => {
    cnt++
    count.value = cnt
})