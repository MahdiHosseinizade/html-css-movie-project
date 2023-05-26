
function redirectTo(url){
    window.location.href = url;
}
function openMenu(){
    var hamburgerMenu = document.getElementsByClassName("menuBurger")[0]
    hamburgerMenu.style.right=0

}
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
});
});;