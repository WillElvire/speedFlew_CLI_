import { consoleAction } from './../../core/types/console';
import { SpeedFlewYargs } from './yarg.cli';
export class SpeedProcess {
    process !: consoleAction ;
    constructor() {
     this.enable();
    }

    enable()  {
        this.process = SpeedFlewYargs.getInstance().wachAction() as consoleAction;
        console.log(SpeedFlewYargs.getInstance().watchArguments())
        switch(this.process) {
            case  "new" : 
              console.log("Application creation")
            break;
        }
    }
}