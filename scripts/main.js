let miImage = document.querySelector('img');
//let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/merli.png') {
      miImage.setAttribute('src','images/merli2.png');
      miTitulo.textContent = 'Pero se enoja y te saca un diente jajaja';
    } else {
      miImage.setAttribute('src', 'images/merli.png');
      miTitulo.textContent = 'La odontóloga más sexi del condado';
    }
}

/*

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
  }

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

*/

miBoton.onclick = function() {
    estableceNombreUsuario();
}
