/**
 * Crea la carta
 * @param {string} carta crea la carta en HTML
 */

export const crearCartaHTML = (carta) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};
