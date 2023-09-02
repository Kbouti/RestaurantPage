const addHoursListener = () => {
    const hoursBtn = document.getElementById(`hoursBtn`);
    hoursBtn.addEventListener(`click`, ()=>{
        console.log(`You clicked the hours button`);

        let body = document.getElementById(`body`);

        body.innerHTML = ""

            const bodyHours = document.createElement(`div`);
                bodyHours.setAttribute(`id`, `bodyHours`);
                bodyHours.setAttribute(`class`, `subPage`);
                body.appendChild(bodyHours);

            const hoursTitle = document.createElement(`div`);
                hoursTitle.setAttribute(`id`, `hoursTitle`);
                hoursTitle.setAttribute(`class`, `bodyText`);
                hoursTitle.innerHTML = `Hours`;
                bodyHours.appendChild(hoursTitle);

            const hoursContent = document.createElement(`div`);
            hoursContent.setAttribute(`id`, `hoursContent`);
            hoursContent.setAttribute(`class`, `bodySubtext`);

            const mon = document.createElement(`div`);
            const tue = document.createElement(`div`);
            const wed = document.createElement(`div`);
            const thu = document.createElement(`div`);
            const fri = document.createElement(`div`);
            const sat = document.createElement(`div`);
            const sun = document.createElement(`div`);

            const days = [];

            bodyHours.appendChild(hoursContent);


    })
}
export default addHoursListener;



