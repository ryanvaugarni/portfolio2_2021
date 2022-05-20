document.addEventListener("DOMContentLoaded",()=>{
    console.log("Vous êtes connecté")
    let date, foot
    let menu = document.querySelector("header img");
    let menu_div = document.querySelector(".hide_menu")
    menu.addEventListener("click",()=>{
        menu_div.classList.toggle("show_menu")
        if((menu.src.match("./asset/hamburger.png")))
        {
            menu.src = "./asset/croix.png"
        }
        else{
            menu.src = "./asset/hamburger.png"}
    })
    date = new Date();
    foot = document.querySelector("footer p");
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | Tous droits réservés`
})