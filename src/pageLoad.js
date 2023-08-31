console.log(`pageload js loaded`);

import homepage from './homepage';

function initialLoad() {
    console.log(`initial load function run`);
    homepage();
}

export default initialLoad;