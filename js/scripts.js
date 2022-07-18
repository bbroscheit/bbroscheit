// efecto de hover sobre barra de navegacion

const navBar = document.getElementById("navBar");
const navBarLink = document.getElementsByClassName("navHidden");
navBar.addEventListener('mouseover',function(){
    navBar.classList.add('navHover');
     
    //navBarLink[0].classList.remove('navHidden');
    //navBarLink[0].classList.add('navActive');
})

navBar.addEventListener('mouseout',function(){
    let navegacion = document.getElementsByClassName("navActive");
    console.log(navegacion)
    navBar.classList.remove('navHover');
    navegacion.classList.remove('navActive');
    navegacion.classList.add('navHidden');
})