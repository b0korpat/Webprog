let heroes = [
    { firstName: "Ahsoka", lastName: "Tano", job: "padawan" },
    { firstName: "Boba", lastName: "Fett", job: "fejvadász" },
    { firstName: "Han", lastName: "Solo", job: "csempész" },
    { firstName: "Leia", lastName: "Organa", job: "szenátor" },
    { firstName: "Leia", lastName: "Organa", job: "szenátor" },
    { firstName: "Leia", lastName: "Organa", job: "szenátor" },

];

function display(array) {
    let out = "";
    for (let person of array) {
        out += `<div class="card"><div class="name">${person.firstName} ${person.lastName}</div>
        <div class="job">${person.job}</div></div>`;
    }
    document.getElementById('container').innerHTML = out;
}

display(heroes);