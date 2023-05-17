import "./style.css";

// PUNTUACIÓN
const puntuacion = (): number => 0;

// ALMACENAR PUNTUACIÓN
const almacenarPuntuacion: number = puntuacion();

// MOSTRAR PUNTUACIÓN EN EL DIV
const elementoPuntuacion = document.getElementById("puntuacion");

if (elementoPuntuacion) {
  elementoPuntuacion.innerHTML = `${almacenarPuntuacion} es la puntuacion`;
}

// MOSTRAR RESULTADO PUNTUACIÓN EN CONSOLA
console.log(almacenarPuntuacion);

///////////// ----------------------------- FUNCIÓN DAME CARTA
function dameCarta() {
  // GENERAR VALOR
  const generarValorCarta = (): number => Math.floor(Math.random() * 10) + 1;

  // ALMACENAR VALOR CARTA
  let almacenarValor: number = generarValorCarta();

  if (almacenarValor > 7) {
    almacenarValor = almacenarValor + 2;
  }

  pintarCarta(almacenarValor);
}

//MOSTRAR LAS CARTAS Y ASIGNARLE EL VALOR

function pintarCarta(cartaGenerada: number) {
  switch (cartaGenerada) {
    case 1:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/1_as-copas.jpg";
      break;
    case 2:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/2_dos-copas.jpg";
      break;
    case 3:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/3_tres-copas.jpg";
      break;
    case 4:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/4_cuatro-copas.jpg";
      break;
    case 5:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/5_cinco-copas.jpg";
      break;
    case 6:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/6_seis-copas.jpg";
      break;
    case 7:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/7_siete-copas.jpg";
      break;
    case 10:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/10_sota-copas.jpg";
      break;
    case 11:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/11_caballo-copas.jpg";
      break;
    case 12:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/12_rey-copas.jpg";
      break;
    default:
      (document.getElementById("cartas") as HTMLImageElement).src =
        "/src/img/back.jpg";
      break;
  }

  console.log(cartaGenerada);
}

// EL BOTÓN NOS MUESTRA EL VALOR DE LA CARTA
const botonValor = document.getElementById("botonDameCarta");

if (botonValor) {
  botonValor.addEventListener("click", dameCarta);
}
