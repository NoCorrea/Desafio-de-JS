/* poderia colocar a 'const' e logo em seguida o 'addEventListener' para cada box, mas 
por questões de melhor visualização é melhor separar os 'const' dos 'eventos de escuta'.
abaixo o primeiro código com um evento de escuta para cada box*/

/*
const $box1=document.querySelector('.box-1')
const $box2=document.querySelector('.box-2')
const $box3=document.querySelector('.box-3')
const $box4=document.querySelector('.box-4')

$box1.addEventListener('click',function(){
    $box1.remove()
})
$box2.addEventListener('click',function(){
    $box2.remove()
})
$box3.addEventListener('click',function(){
    $box3.remove()
})
$box4.addEventListener('click',function(){
    $box4.remove()
})*/

/*agora vamos fazer um script onde uma única variável 'const' pegue a informação de cada uma das box.*/
const $box1=document.querySelector('.box-1')
const $box2=document.querySelector('.box-2')
const $box3=document.querySelector('.box-3')
const $box4=document.querySelector('.box-4')


function removeBox(boxNumber){
    const $box=document.querySelector('.box-'+ boxNumber)
    $box.remove()
}


$box1.addEventListener('click',function(){
    removeBox(1)
})
$box2.addEventListener('click',function(){
    removeBox(2)
})
$box3.addEventListener('click',function(){
    removeBox(3)
})
$box4.addEventListener('click',function(){
    removeBox(4)
})