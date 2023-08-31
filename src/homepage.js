
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

}

export default homepage;










