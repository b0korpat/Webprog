const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const darkModeLabel = document.getElementById('darkModeLabel');
const mainDiv = document.querySelector('.orarend');
const borders = document.querySelectorAll('hr, h1, .ora');
const bordersForH2 = document.querySelectorAll('h2');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        mainDiv.style.backgroundColor = 'black';
        mainDiv.style.color = 'white';
        darkModeLabel.style.color = 'white';

        borders.forEach(element => {
            element.style.border = '2px white solid';
        });

        bordersForH2.forEach(element => {
            element.style.border = '3px white solid';
        });

        darkModeIcon.classList.add('spin');
        darkModeIcon.src = 'img/sun.png';

      

    } else {

        mainDiv.style.backgroundColor = '';
        mainDiv.style.color = 'black';
        darkModeLabel.style.color = 'black';
        

        borders.forEach(element => {
            element.style.border = '2px black solid';
        });

        bordersForH2.forEach(element => {
            element.style.border = '3px black solid';
        });

        darkModeIcon.classList.add('spin');
        darkModeIcon.src = 'img/moon.png';

        darkModeIcon.classList.remove('spin');
    }
});
