console.log(`Welcome to the console of the pizza website of the Kevdawg`);


function sayHello() {
    console.log(`Hello Kevin`);
}


sayHello()


function addElement() {
    let element = document.createElement(`div`);
    element.innerHTML = (`Hi Kevin`)

    return element;
}

document.body.appendChild(addElement());