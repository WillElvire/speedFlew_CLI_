import yargs from "yargs";
import { speedOption, speedUsage } from "../statics/console.helper";

export class SpeedFlewYargs {
 

    private  static Instance : SpeedFlewYargs ; 
    
    public static  getInstance()  :  SpeedFlewYargs {
     if(this.Instance != null) return this.Instance;
     return this.Instance = new SpeedFlewYargs();
    }

    private constructor() {
      this.showHelpers();
    }

    public  getArgument()  {
      return  yargs;
    }

    showHelpers() {
      return yargs.usage(speedUsage)
      .options(speedOption() as any)
      .help(true);
    }
}