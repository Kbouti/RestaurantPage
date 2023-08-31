
console.log(`homepage js loaded`);


const homepage = () => {


    const content = document.getElementById(`content`);

    const mainContain = document.createElement(`div`);
    mainContain.setAttribute(`id`, `mainContain`);
    content.appendChild(mainContain);



    const mainHeader = document.createElement(`div`);
    mainHeader.setAttribute(`id`, `mainHeader`);
    mainContain.appendChild(mainHeader);

    const subHeader = document.createElement(`div`);
    subHeader.setAttribute(`id`, `subHeader`);
    mainContain.appendChild(subHeader);




    const headerItem1 = document.createElement('div');
    headerItem1.classList.add(`headerItem`);
    headerItem1.innerHTML = '215-327-1557';
    mainHeader.appendChild(headerItem1);



    const headerItem2 = document.createElement('div');
    // headerItem2.classList.add(`headerItem`);
    headerItem2.setAttribute(`id`, `headerLogo`);
    const logoImage = document.createElement('img');
    logoImage.src = "/src/images/kevdogPizzaLogo.png";
    logoImage.alt = "Pizza By Kevdog";
    headerItem2.appendChild(logoImage);
    mainHeader.appendChild(headerItem2);
    

    const headerItem3 = document.createElement('div');
    headerItem3.classList.add(`headerItem`);
    headerItem3.innerHTML = 'Order Now!';
    mainHeader.appendChild(headerItem3);


    const subMenu = document.createElement(`ul`);
        subMenu.setAttribute(`id`, `subMenu`);
        subHeader.appendChild(subMenu);
        const li1 = document.createElement(`li`);
            li1.classList.add(`menu`);
            li1.classList.add(`subMenu`);
            li1.innerHTML = `Menu`;
            subMenu.appendChild(li1);
        const li2 = document.createElement(`li`);
            li2.classList.add(`menu`);
            li2.classList.add(`subMenu`);
            li2.innerHTML = `Specials`;
            subMenu.appendChild(li2);

        const li3 = document.createElement(`li`);
            li3.classList.add(`menu`);
            li3.classList.add(`subMenu`);
            li3.innerHTML = `Locations`;
            subMenu.appendChild(li3);

        const li4 = document.createElement(`li`);
            li4.classList.add(`menu`);
            li4.classList.add(`subMenu`);
            li4.innerHTML = `Hours`;
            subMenu.appendChild(li4);

        const li5 = document.createElement(`li`);
            li5.classList.add(`menu`);
            li5.classList.add(`subMenu`);
            li5.innerHTML = `Contact Us`;
            subMenu.appendChild(li5);





}

export default homepage;










