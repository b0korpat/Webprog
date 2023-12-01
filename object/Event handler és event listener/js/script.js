const button = document.getElementById('submitButton');

button.addEventListener('click',  () => {
    let txt = document.getElementById('textInput')
    console.log('Beírt szöveg: ', txt.value);
    txt.value = ""
});


