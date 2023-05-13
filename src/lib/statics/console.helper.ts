/*********************************************************************/
/****************METHODES AVEC DES DONNEES EN DURE********************/
/*********************************************************************/

export const SpeedFlewHelpers = ()=> [
  "\nOptions:\r",
  "\t--version\t      Show version number. \t\t [boolean]\r",
  "    -r, --repository\t",
  "      ",
  "Clone a repository.",
  "\t\t",
  "[boolean]\r",

  "    -s, --start\t",
  "      ",
  "create a project.",
  "\t\t",
  "[boolean]\r",

  "\t--help\t\t      ",
  "Show help.",
  "\t\t\t",
  "[boolean]\n",
];

export const speedUsage  : string  = "\nUsage: speed | sp  <parameter> to start using SpeedFlew CLI";
export const speedOption = function(){ 
   return {
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
    }
  }
}