document.addEventListener("DOMContentLoaded",()=>{
    console.log("Vous êtes connecté")
    let date, foot
    date = new Date();
    foot = document.querySelector("footer p");
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | All rights reserved`
})