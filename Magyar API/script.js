const selectTelepules = document.getElementById('selectTelepules');
const telepulesIranyitoSzamok = document.getElementById('telepulesIranyitoSzamok');
const telepules = document.getElementById('telepules');
const keresesGomb = document.getElementById('kereses');

keresesGomb.addEventListener('click', () => {
  document.getElementById("loadGif").style.display = "block"
  setTimeout(() => {TelepulesLoad(); document.getElementById("loadGif").style.display = "none"}, 500);
});


function TelepulesLoad() {
  const telepulesNev = document.getElementById('telepules').value;
  console.log(telepulesNev);
  const url = `https://hur.webmania.cc/zips/${telepulesNev}.json`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(t => {
      GetData(t);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function GetData(response) {
  ki = "";
  response = response.zips;
  for(x of response){
    ki += `<tr><td>${x.zip} : ${x.name}</tr></td>`
  }
  telepulesIranyitoSzamok.innerHTML = ki;
}
