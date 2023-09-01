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
            body.appendChild(bodyMenu);

        const menuTitle = document.createElement(`div`);
            menuTitle.setAttribute(`id`, `menuTitle`);
            menuTitle.innerHTML = `Menu`;
            bodyMenu.appendChild(menuTitle);


    })
}
export default addMenuListener;



