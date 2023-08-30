console.log(`Welcome to the console of the pizza website of the Kevdawg`);


function addElement() {
    let element = document.createElement(`div`);
    element.innerHTML = (`Hi Kevin< i'm a div made by Javascript!`)

    return element;
}

document.body.appendChild(addElement());