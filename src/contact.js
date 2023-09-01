const addContactListener = () => {
    const contactBtn = document.getElementById(`contactBtn`);
    contactBtn.addEventListener(`click`, ()=>{
        console.log(`You clicked the "contact us" button`);

        let body = document.getElementById(`body`);

        body.innerHTML = ""


            const bodyContact = document.createElement(`div`);
                bodyContact.setAttribute(`id`, `bodyHours`);
                bodyContact.setAttribute(`class`, `subPage`);
                body.appendChild(bodyContact);

            const contactTitle = document.createElement(`div`);
                contactTitle.setAttribute(`id`, `contactTitle`);
                contactTitle.setAttribute(`class`, `bodyText`);
                contactTitle.innerHTML = `Contact Us`;
                bodyContact.appendChild(contactTitle);

            const contactContent = document.createElement(`div`);
            contactContent.setAttribute(`id`, `contactContent`);
            contactContent.setAttribute(`class`, `bodySubtext`);

            contactContent.innerHTML = `Please don't actually try to contact us. `;
            bodyContact.appendChild(contactContent);


    })
}
export default addContactListener;

