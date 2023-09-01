console.log(`pageload js loaded`);

import homepage from './homepage';
import addMenuListener from './menu';

import addHomeListener from './menu';

function initialLoad() {
    console.log(`initial load function run`);
    homepage();
    addMenuListener();
    addHomeListener();

    const homeBtn = document.getElementById(`homeBtn`);
        homeBtn.addEventListener(`click`, function(){
            location.reload();
        });
    const logo = document.getElementById(`headerLogo`);
        logo.addEventListener(`click`, function(){
            location.reload();
        });
}

export default initialLoad;