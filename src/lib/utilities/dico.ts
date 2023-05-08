import { consoleColor } from './../../core/types/console';
/****************************************************************/
/****************TYPOGRAPHIE DU CLI & L'ECRITURE*****************/
/***************************************************************/

//import boxen  from "boxen";
import { defineColorToConsole } from './color';
export function drawIcon(title: string) {
  /*return boxen("unicorn", {
    padding: 1,
    backgroundColor: "red",
    textAlignment: "center",
    title 
  });*/
}


export function writeInConsole(term : string , color : consoleColor = 'red') {
  if(!term) return "Issue got try to solve it";
  return defineColorToConsole(term,color);
}