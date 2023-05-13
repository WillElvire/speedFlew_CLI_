import yargs from "yargs";
import { speedOption, speedUsage } from "../statics/console.helper";
import { consoleAction } from "../../core/types/console";

export class SpeedFlewYargs {
  
  private static Instance: SpeedFlewYargs;

  public static getInstance(): SpeedFlewYargs {
    if (this.Instance != null) return this.Instance;
    return (this.Instance = new SpeedFlewYargs());
  }

  private constructor() {
    this.showHelpers();
  }

  private get argument(): any {
    return yargs;
  }

  showHelpers() {
    return yargs
      .usage(speedUsage)
      .options(speedOption() as any)
      .help(true).argv;
  }

  // ecouter l'action de l'utilisateur ex  : Speed new ( le new sera ecouté par cette fonction)
  // cela nous permettra de savoir les attentes de l'utilisateur
  public wachAction(): string {
    const argument: string = this.argument.argv._[0];
    let action!: consoleAction;

    if (["New", "new", "n", "N"].includes(argument)) {
      return (action = "new");
    }

    if (["Create", "create", "c", "C"].includes(argument)) {
      return (action = "create");
    }

    return "";
  }

  public watchArguments() {
    return this.argument.argv._.map((arg: any, index: number) => {
      return {
        arg,
        index,
      };
    });
  }
}
