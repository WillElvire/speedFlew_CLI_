import yargs from "yargs";
import { speedOption, speedUsage } from "../statics/console.helper";

export class SpeedFlewYargs {
    constructor() {
         yargs.usage(speedUsage)
        .options( {
            r: {
              alias: "repository",
              describe: "Clone a repository",
              type: "boolean",
              demandOption: false,
            },
            s: {
              alias: "start",
              describe: "Start a new project",
              type: "boolean",
              demandOption: false,
            },
          })
        .help(true).argv;
       
    }
}