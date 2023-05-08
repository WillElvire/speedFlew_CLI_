import chalk from "chalk";

export function defineColorToConsole (text : string) {
  return console.log(chalk.blue(text));
};
