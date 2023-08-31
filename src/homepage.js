
console.log(`homepage js loaded`);


const homepage = () => {


    const content = document.getElementById(`content`);

    const mainContain = document.createElement(`div`);
    mainContain.setAttribute(`id`, `mainContain`);

    const mainHeader = document.createElement(`div`);
    mainHeader.setAttribute(`id`, `mainHeader`);


    const headerItem1 = document.createElement('div');
    headerItem1.classList.add(`headerItem`);
    headerItem1.innerHTML = '215-327-1557'


    const headerItem2 = document.createElement('div');
    headerItem2.setAttribute(`id`, `headerLogo`)

    const headerItem3 = document.createElement('div');
    headerItem3.classList.add(`headerItem`);
    headerItem3.innerHTML = 'Order Now!'


    mainContain.appendChild(mainHeader);
    content.appendChild(mainContain);
    mainHeader.appendChild(headerItem1);
    mainHeader.appendChild(headerItem2);
    mainHeader.appendChild(headerItem3);

}

export default homepage;










