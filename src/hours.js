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

            mon.innerHTML = "Monday: 11am - 9pm";
            tue.innerHTML = "Tuesday: 11am - 9pm";
            wed.innerHTML = "Wednesday: 11am - 9pm";
            thu.innerHTML = "Thursday: 11am - 9pm";
            fri.innerHTML = "Friday: 11am - 11pm";
            sat.innerHTML = "Saturday: 9am - 11pm";
            sun.innerHTML = "Sunday: 9am - 11pm";

            mon.classList.add(`dayHour`);
            tue.classList.add(`dayHour`);
            wed.classList.add(`dayHour`);
            thu.classList.add(`dayHour`);
            fri.classList.add(`dayHour`);
            sat.classList.add(`dayHour`);
            sun.classList.add(`dayHour`);

        hoursContent.appendChild(mon);
        hoursContent.appendChild(tue);
        hoursContent.appendChild(wed);
        hoursContent.appendChild(thu);
        hoursContent.appendChild(fri);
        hoursContent.appendChild(sat);
        hoursContent.appendChild(sun);


            bodyHours.appendChild(hoursContent);


    })
}
export default addHoursListener;



