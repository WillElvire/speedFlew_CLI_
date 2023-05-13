import { SpeedProcess } from "../domain/process.cli";
import { SpeedFlewYargs } from "../domain/yarg.cli";
import { defineColorToConsole } from "../utilities/color";
import { writeInConsole } from "../utilities/dico";
import { Helper } from "../utilities/helps";

/****************************************************************/
/****************CONFIGURATION DE BASE DU CLI********************/
/***************************************************************/
export class BaseConfig {

    public static runApplication() {
        BaseConfig.loadApplicationRequirement()
    }

    public  static loadApplicationRequirement() {
        return [
            defineColorToConsole("SpeedFlew","red"),
            new SpeedProcess(),
          
        ];
    }


    public static showConsoleHelpers() {
        new Helper().run();
    }

}