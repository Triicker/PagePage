function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i)=> {
    setTimeout(() => elemento.innerHTML += letra, 95 * i);
  });
}
const titulo = document.querySelector('h1');
typeWriter(titulo);

let menuItems = document.querySelectorAll("nav ul li");
let menuAnchors = document.querySelectorAll("nav ul li a");

menuItems.forEach((item, index) => {
  item.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    menuAnchors[index].style.left = x - item.offsetLeft - 20 + "px";
    menuAnchors[index].style.top = y - item.offsetTop - 13 + "px";
  });

  item.addEventListener("mouseleave", (e) => {
    menuAnchors[index].style.left = "25%";
    menuAnchors[index].style.top = "25%";
  });
});