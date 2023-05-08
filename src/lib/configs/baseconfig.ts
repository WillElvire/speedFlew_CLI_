import { defineColorToConsole } from "../utilities/color";
import { drawIcon } from "../utilities/dico";
export class BaseConfig {
    public static runApplication() {
        BaseConfig.loadApplicationRequirement()
    }

    public  static loadApplicationRequirement() {
        return [
            defineColorToConsole("SpeedFlew","red"),
            drawIcon("SpeedFlew")
        ]
    }
}