const addMenuListener = () => {
    const menuBtn = document.getElementById(`menuBtn`);
    menuBtn.addEventListener(`click`, ()=>{
        console.log(`You clicked the menu button`);

        let mainContent = document.getElementById(`mainContent`);
        let body = document.getElementById(`body`);

        body.removeChild(mainContent);
        body.removeChild(review1);
        body.removeChild(review2);

        const bodyMenu = document.createElement(`div`);
            bodyMenu.setAttribute(`id`, `bodyMenu`);
            bodyMenu.setAttribute(`class`, `subPage`);
            body.appendChild(bodyMenu);

            const menuTitle = document.createElement(`div`);
                menuTitle.setAttribute(`id`, `menuTitle`);
                menuTitle.setAttribute(`class`, `bodyText`);
                menuTitle.innerHTML = `Menu`;
                bodyMenu.appendChild(menuTitle);

            const menuContent = document.createElement(`div`);
            menuContent.setAttribute(`id`, `menuContent`);
            menuContent.setAttribute(`class`, `bodySubtext`);

            menuContent.innerHTML = `This is where all the pizza options would go`;
            bodyMenu.appendChild(menuContent);


    })
}
export default addMenuListener;



