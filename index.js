const $inputField = document.querySelector('.write');
const $textoSpan = document.getElementById('texto');

$inputField.addEventListener("input", function() {
    $textoSpan.textContent = $inputField.value;
})