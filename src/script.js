document.addEventListener("DOMContentLoaded",()=>{
    console.log("Vous êtes connecté")
    let date, foot
    let menu = document.querySelector("header img");
    let menu_div = document.querySelector(".menuhidden")

    menu.addEventListener("click",()=>{
        menu_div.classList.toggle("menushown")
        if((menu.src.match("./asset/menu1.png")))
        {
            menu.src = "./asset/croix.png"
        }
        else{
            menu.src = "./asset/menu1.png"}

    })
    date = new Date();
    foot = document.querySelector("footer p");
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | Tous droits réservés`
})