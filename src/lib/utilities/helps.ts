import { SpeedFlewHelpers } from "../statics/console.helper";
import { writeInConsole } from "./dico";
/****************************************************************/
/****************LES CLASSES POUR LES AIDES ********************/
/***************************************************************/
export class ConsoleHelper {
  public static loadHelpers() {
    return SpeedFlewHelpers();
  }
}

export class Helper {
   private consoleHelpers : string[] =  ConsoleHelper.loadHelpers();
   run() {
    this.consoleHelpers.forEach((helpers)=>{
        writeInConsole(helpers,'red');
    })
   }
}