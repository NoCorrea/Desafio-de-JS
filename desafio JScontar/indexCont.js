
const $inputField = document.querySelector('.input-number');
const $form = document.querySelector('.form')
const $outputField = document.querySelector('.output')

$form.addEventListener('submit', function(event) {
    event.preventDefault()
    
$outputField.textContent = ''

    
const $inputValue = Number($inputField.value)
    for (let index = 0; index <= $inputValue; index++ ){
        $outputField.textContent = $outputField.textContent + index + ' '
    }
})

    
  