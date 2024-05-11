/**
 * Esta funcion devuelve el nombre de la carta
 * @returns {String}
 * @param {Array<string>} deck Se pide el deck
 * @returns {string} Devuelve el nombre de la carta
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) throw "No hay cartas en el deck";
  return deck.pop();
};
