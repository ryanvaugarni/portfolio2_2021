document.addEventListener("DOMContentLoaded",()=>{
    console.log("Vous êtes connecté")
    let date, foot
    let menu = document.querySelector("header img");
    let menu_div = document.querySelector(".hide_menu")
    let butta = document.querySelector(".experience");
    let buttb = document.querySelector(".logiciel");
    let buttc = document.querySelector(".formation");
    let buttd = document.querySelector(".projet");
    let butte = document.querySelector(".interet");
    let buttf = document.querySelector(".contact");

    butta.addEventListener("click",()=>{
        menu_div.classList.toggle("show_menu")
        menu.src = "./asset/menu1.png"
        

    })
    buttb.addEventListener("click",()=>{
        menu_div.classList.toggle("show_menu")
        menu.src = "./asset/menu1.png"

    })
    buttc.addEventListener("click",()=>{
        menu_div.classList.toggle("show_menu")
        menu.src = "./asset/menu1.png"

    })
    buttd.addEventListener("click",()=>{
        menu_div.classList.toggle("show_menu")
        menu.src = "./asset/menu1.png"

    })
    butte.addEventListener("click",()=>{
        menu_div.classList.toggle("show_menu")
        menu.src = "./asset/menu1.png"

    })
    buttf.addEventListener("click",()=>{
        menu_div.classList.toggle("show_menu")
        menu.src = "./asset/menu1.png"

    })
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