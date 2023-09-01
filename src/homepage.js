
console.log(`homepage js loaded`);


const homepage = () => {


    const content = document.getElementById(`content`);

    const mainContain = document.createElement(`div`);
        mainContain.setAttribute(`id`, `mainContain`);
        content.appendChild(mainContain);


    const mainHeader = document.createElement(`div`);
        mainHeader.setAttribute(`id`, `mainHeader`);
        mainContain.appendChild(mainHeader);

        const headerItem1 = document.createElement('div');
            headerItem1.classList.add(`headerItem`);
            headerItem1.innerHTML = '215-327-1557';
            mainHeader.appendChild(headerItem1);

        const headerItem2 = document.createElement('div');
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

    const subHeader = document.createElement(`div`);
    subHeader.setAttribute(`id`, `subHeader`);
    mainContain.appendChild(subHeader);

    const subMenu = document.createElement(`ul`);
        subMenu.setAttribute(`id`, `subMenu`);
        subHeader.appendChild(subMenu);
        const li1 = document.createElement(`li`);
            li1.classList.add(`menu`);
            li1.classList.add(`subMenu`);
            li1.innerHTML = `Menu`;
            li1.setAttribute(`id`, `menuBtn`);
            subMenu.appendChild(li1);
        const li2 = document.createElement(`li`);
            li2.classList.add(`menu`);
            li2.classList.add(`subMenu`);
            li2.setAttribute(`id`, `specialsBtn`);
            li2.innerHTML = `Specials`;
            subMenu.appendChild(li2);

        const li3 = document.createElement(`li`);
            li3.classList.add(`menu`);
            li3.classList.add(`subMenu`);
            li3.setAttribute(`id`, `locationsBtn`);
            li3.innerHTML = `Locations`;
            subMenu.appendChild(li3);

        const li4 = document.createElement(`li`);
            li4.classList.add(`menu`);
            li4.classList.add(`subMenu`);
            li4.setAttribute(`id`, `hoursBtn`);
            li4.innerHTML = `Hours`;
            subMenu.appendChild(li4);

        const li5 = document.createElement(`li`);
            li5.classList.add(`menu`);
            li5.classList.add(`subMenu`);
            li5.setAttribute(`id`, `contactBtn`);
            li5.innerHTML = `Contact Us`;
            subMenu.appendChild(li5);

    const body = document.createElement(`div`);
        body.setAttribute(`id`, `body`);
        mainContain.appendChild(body);

        const mainContent = document.createElement(`div`);
            mainContent.setAttribute(`id`, `mainContent`);
            body.appendChild(mainContent);

            const message1 = document.createElement(`div`);
                message1.setAttribute(`id`, `message1`);
                message1.setAttribute(`class`, `bodyText`);
                message1.innerHTML = 'Best Pizza in Town!!!';
                mainContent.appendChild(message1);

            const photoHolder1 = document.createElement(`div`);
                photoHolder1.setAttribute(`id`, `photoHolder1`);
                mainContent.appendChild(photoHolder1);

                const counterPizza = document.createElement(`img`);
                    counterPizza.src = `/src/images/counterTopPizza.jpeg`;
                    counterPizza.alt = `Delicious pizza`;
                    counterPizza.setAttribute(`id`, `counterPizza`);
                    photoHolder1.appendChild(counterPizza);

            const message2 = document.createElement(`div`);
                message2.setAttribute(`id`, `message2`);
                message2.setAttribute(`class`, `bodyText`);
                message2.innerHTML = `Don't just take our word for it...`;
                mainContent.appendChild(message2);


        const review1 = document.createElement(`div`);
            review1.setAttribute(`id`, `review1`);
            review1.setAttribute(`class`, `review`);
            body.appendChild(review1);

            const photoHolder2 = document.createElement(`div`);
                photoHolder2.setAttribute(`id`, `photoHolder2`);
                review1.appendChild(photoHolder2);

                const howie = document.createElement(`img`);
                    howie.src = `/src/images/howie.jpeg`;
                    howie.alt = `Adorable puppy standing in water bowl`;
                    howie.setAttribute(`id`, `howie`);
                    howie.setAttribute(`class`, `dog`);
                    photoHolder2.appendChild(howie);


                    const review2 = document.createElement(`div`);
                    review2.setAttribute(`id`, `review2`);
                    review2.setAttribute(`class`, `review`);
                    body.appendChild(review2);
        
                    const photoHolder3 = document.createElement(`div`);
                        photoHolder3.setAttribute(`id`, `photoHolder3`);
                        review2.appendChild(photoHolder3);
        
                        const lucy = document.createElement(`img`);
                            lucy.src = `/src/images/lucy.jpeg`;
                            lucy.alt = `The sweetest little puppy`;
                            lucy.setAttribute(`id`, `lucy`);
                            lucy.setAttribute(`class`, `dog`);
                            photoHolder3.appendChild(lucy);



                const footer = document.createElement(`div`);
                    footer.setAttribute(`id`, `footer`);
                    mainContain.appendChild(footer);

                    const attributions = document.createElement(`div`);
                    attributions.setAttribute(`id`, `attributions`);
                    footer.appendChild(attributions);

                        const signature = document.createElement(`div`);
                            signature.setAttribute(`id`, `signature`);
                            signature.innerHTML= 'Kbouti 2023'
                            attributions.appendChild(signature);

                        const logoMakr = document.createElement(`div`);
                            logoMakr.setAttribute(`id`, `logoMakr`);
                            logoMakr.innerHTML = `Logo created at `;
                            attributions.appendChild(logoMakr);

                            const link = document.createElement(`a`);
                                link.setAttribute(`href`, `https://logomakr.com/`);
                                link.innerHTML = `logomakr.com`;
                                logoMakr.appendChild(link);
                        





}

export default homepage;







