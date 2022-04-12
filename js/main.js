const menus01 = document.querySelectorAll(".menu_01");
 
function toggle() {
  const content = this.nextElementSibling;
//   const content = this.firstElementChild;
  this.classList.toggle("is_active");
  content.classList.toggle("is_open");
}

menus01.forEach(menu01 => {
    menu01.addEventListener('click', toggle);
})

const menus02 = document.querySelectorAll(".menu_02");
 
menus02.forEach(menu02 => {
    menu02.addEventListener('click', toggle);
})