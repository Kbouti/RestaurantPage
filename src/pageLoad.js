console.log(`pageload js loaded`);

import homepage from './homepage';
import addMenuListener from './menu';

function initialLoad() {
    console.log(`initial load function run`);
    homepage();
    addMenuListener();
}

export default initialLoad;