document.addEventListener("DOMContentLoaded",() => {
    console.log("Vous êtes connecté");
  
    const date = new Date();
    const foot = document.querySelector("footer p");
    const menu = document.querySelector("header img");
    const menu_div = document.querySelector(".hide_menu");
  
    menu.addEventListener("click",() => {
      menu_div.classList.toggle("show_menu");
      menu.src = menu.src.includes("hamburger.png") ? "./asset/croix.png" : "./asset/hamburger.png";
    });
  
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | Tous droits réservés`;
  });