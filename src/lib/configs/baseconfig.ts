import { defineColorToConsole } from "../utilities/color";
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
            BaseConfig.showConsoleHelpers()
            //drawIcon("SpeedFlew")
        ]
    }

    public static showConsoleHelpers() {
        new Helper().run();
    }
}