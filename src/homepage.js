
console.log(`homepage js loaded`);


const homepage = () => {


    const content = document.getElementById(`content`);


    function addMainContain() {
        let mainContain = document.createElement(`div`);
        mainContain.setAttribute(`id`, `mainContain`);
        return mainContain;
    }

    



    content.appendChild(addMainContain());


}

export default homepage;










