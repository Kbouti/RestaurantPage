const addHoursListener = () => {
    const hoursBtn = document.getElementById(`hoursBtn`);
    hoursBtn.addEventListener(`click`, ()=>{
        console.log(`You clicked the hours button`);

        let mainContent = document.getElementById(`mainContent`);
        let body = document.getElementById(`body`);

        body.removeChild(mainContent);
        body.removeChild(review1);
        body.removeChild(review2);

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
            hoursContent.setAttribute(`id`, `menuContent`);
            hoursContent.setAttribute(`class`, `bodySubtext`);

            hoursContent.innerHTML = `This place isn't actually open for business.`;
            bodyHours.appendChild(hoursContent);


    })
}
export default addHoursListener;



