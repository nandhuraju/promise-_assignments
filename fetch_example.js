fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => {
        console.log(error);
    });

fetch("https://jsonplaceholder.typicode.com/todos/57")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => {
        console.log(error);
    });
