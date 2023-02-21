document.addEventListener("DOMContentLoaded", () => {
    console.log("Vous êtes connecté");
    
    const foot = document.querySelector("footer p");
    const year = new Date().getFullYear();
    foot.innerText += ` - ${year} Ryan Vaugarni | Tous droits réservés`;
  });