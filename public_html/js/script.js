/**
* PAGINADOR SIMPLE USANDO AJAX Y JSON
* Ejercicio sencillo que sirve para conocer las bases
* y poder hacer un paginador a partir de una solicitud AJAX
* a un archivo en JSON y recorrerlo mediante el método split
* de javascript para poder crear pequeñas colecciones de registros
* que se muestren depeniendo del número de página.
* @author Fernando Magrosoto V.
* @copyright 2019 - Todos los Derechos Reservados
* @license MIT
*/

// Declarar una variable global para reusarlo a lo largo del script.
// Esta variable contendrá el objeto XMLHttpRequest.
var httpRequest;

// Datos para el sistema paginador
var pagina = 1;       // Número de página inicial
var numPaginas;       // Número de páginas totales
var numRegistros;     // Número de registros totales
var offset;           // Número desde donde haremos la extracción
var regXpagina = 5;   // Registros por página

/**
* FUNCIÓN PARA ACTIVAR AJAX Y HACER LA LLAMADA ASÍNCRONA.
* @uses Esta función se dispara al cargarse todos los elementos de la página
* @return Void
*/
function llamadaAjax() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    console.error('Hay un problema inicializando httpRequest');
    return false;
  }

  httpRequest.onreadystatechange = mostrarContenido;
  // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.open('GET', 'db/datos.json');
  // httpRequest.open('POST', 'db/datos.json');
  httpRequest.send();
  // httpRequest.send("foo=bar&lorem=ipsum");
  // httpRequest.send(JSON.stringify(JSON.stringify({titulo: "txt", bajada: "txt", url: "txt"})));
}

/**
* FUNCIÓN QUE SE DISPARA CUANDO AJAX HAYA REGRESADO CON LOS DATOS SOLICITADOS
* @return Void
*/
function mostrarContenido() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var datos = JSON.parse(httpRequest.responseText);

    } else {
      console.error('Hubo un problema al procesar la solicitud');
    }
  }
}

// AL CARGARSE TODA LA PÁGINA...
window.onload = function () {
  llamadaAjax();
}
