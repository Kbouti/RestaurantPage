
console.log(`homepage js loaded`);


const homepage = () => {


    const content = document.getElementById(`content`);
    function addElement() {
        let element = document.createElement(`div`);
        element.innerHTML = (`Hi Kevin, i'm a div made by Javascript!`);
        element.className = "test";
console.log(`something`)
        return element;
    }

    content.appendChild(addElement());

}

export default homepage;










