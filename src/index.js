import _ from 'lodash';

console.log(`Welcome to the console of the pizza website of the Kevdawg`);



// loadPage()


const content = document.getElementById(`content`);

function addElement() {
    let element = document.createElement(`div`);
    element.innerHTML = (`Hi Kevin, i'm a div made by Javascript!`);
    element.className = "test";

    return element;
}

content.appendChild(addElement());