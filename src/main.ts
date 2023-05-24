import "./style.css";

let puntosTotales = 0;

// GENERAR VALOR
const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 10) + 1;

function dameCarta() {
  // ALMACENAR VALOR CARTA
  let numeroAleatorio: number = generarNumeroAleatorio();
  const carta: number = generarValorCarta(numeroAleatorio);
  pintarCarta(carta);
  calcularPuntuacion(carta);
  finalMano();

  //DESABILITAR BOTÓN
  const desabilitarBoton = document.getElementById(
    "botonDameCarta"
  ) as HTMLButtonElement;

  if (
    desabilitarBoton !== null &&
    desabilitarBoton !== undefined &&
    puntosTotales > 7.5
  ) {
    desabilitarBoton.disabled = true;
  }

  // BOTÓN DE PLANTARSE
  const botonMePlanto = document.getElementById(
    "mePlanto"
  ) as HTMLButtonElement;

  function desabilitarBotonPlantarse() {
    desabilitarBoton.disabled = true;
  }

  if (botonMePlanto) {
    botonMePlanto.addEventListener("click", desabilitarBotonPlantarse);
  }
}

// MOSTRAR MENSAJES
function mostrarMensaje(puntos: number) {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
    elementoPuntuacion.innerHTML = `${puntos} es la puntuación`;
  }
}

function finalMano() {
  mostrarMensaje(puntosTotales);
  revisarMano();
}

// REVISAR MANO
function revisarMano() {
  if (puntosTotales === 7.5) {
    ganarPartida();
  }
  if (puntosTotales > 7.5) {
    perderPartida();
  }
}

// GANAR PARTIDA
function ganarPartida() {
  verMensaje("Enhorabuena has ganado la partida");
}
// GAME OVER
function perderPartida() {
  verMensaje("Game Over");
}

function verMensaje(mensaje: string) {
  const gameOverDiv = document.getElementById("resultado");

  if (gameOverDiv !== null && gameOverDiv !== undefined) {
    gameOverDiv.innerHTML = mensaje;
  }
}

// GENERAR VALOR CARTA
function generarValorCarta(valorAleatorio: number) {
  return valorAleatorio > 7 ? valorAleatorio + 2 : valorAleatorio;
}

function calcularPuntuacion(carta: number) {
  carta < 7
    ? (puntosTotales = puntosTotales + carta)
    : (puntosTotales = puntosTotales + 0.5);
}

//MOSTRAR LAS CARTAS Y ASIGNARLE EL VALOR
function pintarCarta(cartaGenerada: number) {
  let urlCarta: string = "";

  switch (cartaGenerada) {
    case 1:
      urlCarta = "/src/img/1_as-copas.jpg";
      break;
    case 2:
      urlCarta = "/src/img/2_dos-copas.jpg";
      break;
    case 3:
      urlCarta = "/src/img/3_tres-copas.jpg";
      break;
    case 4:
      urlCarta = "/src/img/4_cuatro-copas.jpg";
      break;
    case 5:
      urlCarta = "/src/img/5_cinco-copas.jpg";
      break;
    case 6:
      urlCarta = "/src/img/6_seis-copas.jpg";
      break;
    case 7:
      urlCarta = "/src/img/7_siete-copas.jpg";
      break;
    case 10:
      urlCarta = "/src/img/10_sota-copas.jpg";
      break;
    case 11:
      urlCarta = "/src/img/11_caballo-copas.jpg";
      break;
    case 12:
      urlCarta = "/src/img/12_rey-copas.jpg";
      break;
    default:
      urlCarta = "/src/img/back.jpg";
      break;
  }
  const imgElemento = document.getElementById("cartas");
  if (imgElemento && imgElemento instanceof HTMLImageElement) {
    imgElemento.src = urlCarta;
  } else {
    console.log("Esto da error");
  }
}

// EL BOTÓN NOS MUESTRA EL VALOR DE LA CARTA
const botonValor = document.getElementById("botonDameCarta");

if (botonValor) {
  botonValor.addEventListener("click", dameCarta);
}
