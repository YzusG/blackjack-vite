// import { shuffle } from "underscore";
import _ from "underscore";

// export const miNombre = "Jesus";

/**
 *Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCartas ejemplo: ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<string>} Retorna un neuvo deck de carta
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas.length === 0)
    throw new Error("TiposDeCarta es obligatorio");
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("TiposDeCarta es obligatorio");
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
// export default crearDeck;
