const btnmobile = document.getElementById('btn');

function togglemenu(){
    const nav = document.getElementById("nav");
    nav.classList.toggle(active); 
}
btnmobile.addEventListener("click", togglemenu);






