function recomendar(genero) {
  const edad = parseInt(document.getElementById("edad").value);
  const recomendacion = document.getElementById("recomendacion");

  if (isNaN(edad) || edad < 1) {
    recomendacion.innerHTML = "⚠️ Por favor, ingresa una edad válida.";
    return;
  }

  if (edad === 1 || edad === 2) {
    recomendacion.innerHTML = "❌ A esta edad no se recomienda ver películas o escuchar música aún.";
    return;
  }

  let resultado = "";

  switch (genero) {
    case "drama":
      if (edad >= 3 && edad <= 6) {
        resultado = " Paw Patrol: La Superpelícula";
      } else if (edad >= 7 && edad <= 13) {
        resultado = " Valiente";
      } else if (edad >= 14 && edad <= 17) {
        resultado = " Sirat";
      } else {
        resultado = " Los Pecadores";
      }
      break;

    case "comedia":
      if (edad >= 3 && edad <= 6) {
        resultado = " Minions 2";
      } else if (edad >= 7 && edad <= 13) {
        resultado = " Hotel Transylvania 4";
      } else if (edad >= 14 && edad <= 17) {
        resultado = " Un Viernes de Locos 2";
      } else {
        resultado = " La Trama Fenicia";
      }
      break;

    case "musical":
      if (edad >= 3 && edad <= 6) {
        resultado = "🎶 Hawaiian Roller Coaster Ride Lilo-Stitch, Un Poco Loco - Coco";
      } else if (edad >= 7 && edad <= 13) {
        resultado = "🎶 Gata Only (Cris Mj ft FloyyMenor), Shakira - Acróstico";
      } else if (edad >= 14 && edad <= 17) {
        resultado = "🎶 Olivia Rodrigo - Vampire, Billie Eilish - What Was I Made For?";
      } else {
        resultado = "🎶 Selena Gomez ft. Benny Blanco - Ojos Tristes, The Weeknd - Popular";
      }
      break;

    case "crimen":
      if (edad >= 3 && edad <= 6) {
        resultado = " Scooby-Doo y la maldición del piloto fantasma";
      } else if (edad >= 7 && edad <= 13) {
        resultado = " Detective Pikachu";
      } else if (edad >= 14 && edad <= 17) {
        resultado = " Ballerina";
      } else {
        resultado = " Los 4 Fantásticos: Primeros Pasos";
      }
      break;

    default:
      resultado = "⚠️ Género no reconocido.";
  }

  recomendacion.innerHTML = `🎬 Nuestra recomendación: <strong>${resultado}</strong>`;
}
