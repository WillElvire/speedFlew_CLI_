import { consoleColor } from "../../core/types/console";
const c = require("ansi-colors");
/****************************************************************/
/****************CLASSE POUR LES COULEURS DU CLI****************/
/***************************************************************/
export function defineColorToConsole(
  text: string,
  color: consoleColor = "cyan"
) {
  return applyColor(text, color);
}

function applyColor(text: string, color: consoleColor) {
  switch (color) {
    case "cyan":
      return console.log(c.cyan(text));
    case "red":
      return console.log(c.red(text));
    case "yellow":
      return console.log(c.yellow(text));
    case "blue":
      return console.log(c.blue(text));
  }
}
