// TOGGLE BUTTON
document.getElementById('toggleButton').addEventListener('click',function(){
    let navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('show')) {
        this.innerHTML = ' <i class="fa fa-bars"></i>';
    } else {
        this.innerHTML = '<i class="fa fa-x"></i>';
    }
    navMenu.classList.toggle('show');
});
// year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

//last modified
const date = document.querySelector("#lastModified");
date.innerHTML = `<span>${document.lastModified}<span>`;