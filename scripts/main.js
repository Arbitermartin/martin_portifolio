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