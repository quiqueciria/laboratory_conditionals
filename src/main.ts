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
  if (cartaGenerada === 1) {
    document.getElementById("cartas").src = "/src/img/1_as-copas.jpg";
  }
  if (cartaGenerada === 2) {
    document.getElementById("cartas").src = "/src/img/2_dos-copas.jpg";
  }
  if (cartaGenerada === 3) {
    document.getElementById("cartas").src = "/src/img/3_tres-copas.jpg";
  }
  if (cartaGenerada === 4) {
    document.getElementById("cartas").src = "/src/img/4_cuatro-copas.jpg";
  }
  if (cartaGenerada === 5) {
    document.getElementById("cartas").src = "/src/img/5_cinco-copas.jpg";
  }
  if (cartaGenerada === 6) {
    document.getElementById("cartas").src = "/src/img/6_seis-copas.jpg";
  }
  if (cartaGenerada === 7) {
    document.getElementById("cartas").src = "/src/img/7_siete-copas.jpg";
  }
  if (cartaGenerada === 10) {
    document.getElementById("cartas").src = "/src/img/10_sota-copas.jpg";
  }
  if (cartaGenerada === 11) {
    document.getElementById("cartas").src = "/src/img/11_caballo-copas.jpg";
  }
  if (cartaGenerada === 12) {
    document.getElementById("cartas").src = "/src/img/12_rey-copas.jpg";
  }
}
/*
const mostrarCartas = () => {
  const imagen = document.getElementById("cartas");

  if (imagen) {
    document.getElementById("cartas").src = "/src/img/2_dos-copas.jpg";
  }
  if (dameCarta == 1) {
    cartas.innerHTML = '<img src=https://image.ibb.co/cQKOhc/dice1.png>';
}



  if (imagen === document.getElementById("cartas").src = "/src/img/2_dos-copas.jpg";) {
    imagen = 2;
  }
};
*/

/*
function mostrarcartas() {
  //IDENTIFICA EL DIV DE LAS CARTAS
  const divCartas = (<HTMLInputElement>document.getElementById("cartas")).src;

  //LEE EL VALOR DEL DIV DE LAS CARTAS
  const valorCartas = divCartas;

  // MUESTRA EL VALOR DE LAS CARTAS
  const;
}
*/

// EL BOTÓN NOS MUESTRA EL VALOR DE LA CARTA
const botonValor = document.getElementById("botonDameCarta");

/*
if (botonValor) {
  botonValor.addEventListener("click", mostrarCartas);
}
*/

if (botonValor) {
  botonValor.addEventListener("click", dameCarta);
}
