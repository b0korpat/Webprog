const selectUser = document.getElementById('selectUser');
const userData = document.getElementById('userData');
const selection = document.getElementById('selection');
let users = [];


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {document.getElementById("loadGif").style.display="none"; UsersLoad()}, 1000);});

function UsersLoad() {


  for (let i = 1; i < 30; i++) {

    const url = `https://jsonplaceholder.org/users/?id=${i}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(user => {
        console.log(user);
        users.push(user);
        selection.innerHTML += '<option data-id="' + i + '" onclick="GetUserData(this)">' + user.firstname + " " + user.lastname + '</option>';
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  document.getElementById('selectUser').style.display = 'block';
  console.log(users)
}

function GetUserData() {
    var u = users[document.getElementById("selection").options[document.getElementById("selection").selectedIndex].getAttribute("data-id")];
    userData.innerHTML = `<table><tr><td>Id:</td><td>${u.id}</td></tr><tr><td>Email:</td><td>${u.email}</td></tr><tr><td>Telefonszám:</td><td>${u.phone}</td></tr><tr><td>Cím:</td><td>${u.address.zipcode} ${u.address.city}, ${u.address.street} ${u.address.suite}</td></tr><tr><td>Geolokáció:</td><td>(ez valamiért nem jó)</td></tr></table>`


}
