var mainImg = document.getElementById("slider_image");
var images = ["images/octavia1.jpeg", "images/octavia2.jpg", "images/octavia3.jpg"];
var num = 0;
var sideMenuIsActive = false
const menuButton = document.getElementById('menu_button');
const sideMenu = document.getElementById('sideMenu');

menuButton.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
  if(sideMenuIsActive){
    menuButton.innerHTML = ">";
  }
  else
  {menuButton.innerHTML = "<";}
  sideMenuIsActive = !sideMenuIsActive;
});

function next(){
    num++;
    if(num >= images.length){
        num = 0;
    }
    mainImg.src = images[num];
}
function back(){
    num--;
    if(num < 0){
        num = images.length - 1;
    }
    mainImg.src = images[num];
}