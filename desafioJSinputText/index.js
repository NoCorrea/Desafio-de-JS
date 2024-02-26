const $inputField = document.querySelector('.write');
const $textoSpan = document.getElementById('texto');
const $form = document.querySelector('.form');

$form.addEventListener('submit',function(event){
    event.preventDefault()
    $textoSpan.textContent = $inputField.value;

})

$inputField.addEventListener("input", function() {

$textoSpan.textContent = $inputField.value;
})


/* script acrescentado para que ao clicar em button o campo inputField seja automaticamente selecionado para digitação:
const $writeButton =document.getElementById('write-button')

$writeButton.addEventListener('click', function(){
    $inputField.focus()
})*/

/* OUTRA FORMA DE FAZER O CÓDIGO SEM USAR FUNÇÃO ANÔNIMA:
const $inputField = document.querySelector('.write');
const $textoSpan = document.getElementById('texto');

function updateTextSpan() {
    $textoSpan.textContent = $inputField.value
}

$inputField.addEventListener("input", upadateTextSpan)*/
 