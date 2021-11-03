document.addEventListener("DOMContentLoaded",()=>{
    console.log("Vous êtes connecté")
    let date, foot
    let menu = document.querySelector("header img");
    let menu_div = document.querySelector(".menuhidden")
    menu.addEventListener("click",()=>{
        menu_div.classList.toggle("menushown")

    })
    date = new Date();
    foot = document.querySelector("footer p");
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | All rights reserved`
})