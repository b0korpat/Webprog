let currentUserData = null;
let toplist = JSON.parse(localStorage.getItem('toplist')) || [];

function getUserData() {
    const username = document.getElementById("usernameInput").value;
    if (!username) {
        alert("Kérlek, add meg a felhasználónevet!");
        return;
    }

    fetch(`https://www.codewars.com/api/v1/users/${username}`)
        .then(response => {
            if (response.status === 404) {
                throw new Error("Felhasználó nem található");
            }
            return response.json();
        })
        .then(data => {
            currentUserData = data;
            showCombinedPoints();
        })
        .catch(error => {
            document.getElementById("results").innerHTML = `<p class="error">${error.message}</p>`;
        });
}

function saveToToplist(username, points) {
    const userExists = toplist.some(user => user.username === username);
    if (!userExists) {
        toplist.push({ username, points });
        toplist.sort((a, b) => b.points - a.points);
        localStorage.setItem('toplist', JSON.stringify(toplist));
    }
}

function showCombinedPoints() {
    if (currentUserData) {
        document.getElementById("results").innerHTML = ``
        let languagePoints = '';
        let pointSum = 0;
        for (const language in currentUserData.ranks.languages) {
            languagePoints += `
                <p><strong>${language}:</strong> ${currentUserData.ranks.languages[language].score} pont</p>
            `;
            pointSum += currentUserData.ranks.languages[language].score
        }
        document.getElementById('user').style.display = 'block';
        saveToToplist(currentUserData.username, pointSum);
        document.getElementById("user").innerHTML = `
            <p><strong>Felhasználó:</strong> ${currentUserData.username}</p>
            <p><strong>Összesített pontok:</strong> ${pointSum}</p>
            <p><strong>Rang:</strong> ${currentUserData.ranks.overall.name}</p>
            <h3>Nyelvek szerinti pontok:</h3>
            ${languagePoints}
        `;
    } else {
        alert("Először add meg a felhasználónevet és kérd le az adatokat!");
    }
}

function showToplist() {
    if (toplist.length > 0) {
        let toplistHtml = '<h3>Toplista</h3><ol>';
        toplist.forEach(user => {
            toplistHtml += `<li>${user.username}: ${user.points} pont</li>`;
        });
        toplistHtml += '</ol>';
        document.getElementById("inputElements").style.display = 'none';
        document.getElementById("user").innerHTML = toplistHtml;
        document.getElementById("results").style.display = 'block';
    } else {
        alert("Még nincs elég adat a toplistához!");
    }
}

function showpoints() {
    document.getElementById("user").style.display = 'none';
    document.getElementById("inputElements").style.display = 'block';
    document.getElementById("results").innerHTML = "";
}

function setActiveLink(clickedLink) {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.classList.remove('active');
        link.classList.add('link-secondary');
    });

    clickedLink.classList.add('active');
    clickedLink.classList.remove('link-secondary');
}