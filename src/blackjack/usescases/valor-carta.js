/**
 * Esta funcion da el valor de la carta
 * @param {string} carta Aqui al pedirCarta, sacara la ultima carta del deck
 * @returns {number} y lo convertimos en su valor numero
 */

export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
