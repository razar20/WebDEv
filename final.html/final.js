const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
/*const body = document.querySelector('body')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
    body.classList.toggle('active')
} */

menu.addEventListener('click', mobileMenu)

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("cb1");
    var checkBox = document.getElementById("cb2");
    var checkBox = document.getElementById("cb3");
    var checkBox = document.getElementById("cb4");
    var checkBox = document.getElementById("cb5");
    var checkBox = document.getElementById("cb6");
    var checkBox = document.getElementById("cb7");
    var checkBox = document.getElementById("cb8");
    var checkBox = document.getElementById("cb9");
    var checkBox = document.getElementById("cb10");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
