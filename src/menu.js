const addMenuListener = () => {
    const menuBtn = document.getElementById(`menuBtn`);
    menuBtn.addEventListener(`click`, ()=>{
        console.log(`You clicked the menu button`);

        let mainContent = document.getElementById(`mainContent`);
        let body = document.getElementById(`body`);

        body.removeChild(mainContent);
        body.removeChild(review1);
        body.removeChild(review2);



        

    })
}


export default addMenuListener;