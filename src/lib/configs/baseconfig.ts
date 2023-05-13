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
            writeInConsole(SpeedFlewYargs.getInstance().showHelpers().usage as any),
            writeInConsole(this.readArgument())
        ];
    }


    public static readArgument() {
        if(this.argument.argv?.s == true || this.argument.argv?.start == true) {
            return 'l';
        }
        return 'n'
    }

    public static showConsoleHelpers() {
        new Helper().run();
    }

    public static get argument()  : any {
        return SpeedFlewYargs.getInstance().getArgument();
    }
}