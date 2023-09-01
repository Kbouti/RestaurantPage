const addMenuListener = () => {
    const menuBtn = document.getElementById(`menuBtn`);
    menuBtn.addEventListener(`click`, ()=>{
        console.log(`You clicked the menu button`);
    })
}


export default addMenuListener;