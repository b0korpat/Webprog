const url = "https://jsonplaceholder.typicode.com/todos"
let toDos = []

function TableUpdate() {
    let li = `<tr><th>Title</th><th>Complete</th></tr>`;
    toDos.forEach(element => {
        li += `<tr>
        <td>${element.title} </td>
        <td>${element.completed}</td>        
    </tr>`;
    });
    document.getElementById("toDo").innerHTML = li;
};



function GetMethod() {
    fetch(url, {
        method: "GET"
    })
        .then(response => response.json())
        .then(json => {
            toDos = json;
            TableUpdate()
        });

};

function PostMethod() {
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            userId: 69,
            id: 123123123,
            title: "POST test",
            completed: true
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json()
        )
        .then(json => { console.log(json); toDos.push(json); TableUpdate(); });
}



fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "PUT",
    body: JSON.stringify({
        userId: 69,
        id: 12312312333,
        title: "PUT test",
        completed: true
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => console.log(json));


fetch("https://jsonplaceholder.typicode.com/todos/4", {
    method: "PATCH",
    body: JSON.stringify({
        title: "PATCH test",
    }), // Csak a módosítani kívánt adatokat kell küldeni
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos/6", {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })

    .then(json => console.log(json))
    .catch(error => console.error('There was a problem with the fetch operation:', error));