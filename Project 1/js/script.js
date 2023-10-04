
const bgToggle = document.getElementById('bgToggle');
const mainDiv = document.querySelector('.orarend');
const borders = document.querySelectorAll('hr, h1, h2, .ora');

bgToggle.addEventListener('change', () => {
    if (bgToggle.checked) {

        mainDiv.style.backgroundColor = 'black';
        mainDiv.style.color = 'white';

        borders.forEach(element => {
            element.style.border = '2px white solid';
        });
    } else {
       
        mainDiv.style.backgroundColor = '';
        mainDiv.style.color = 'black';

        borders.forEach(element => {
            element.style.border = '2px black solid'; 
        });
    }
});
