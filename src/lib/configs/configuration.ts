import { BaseConfig } from "./baseconfig";

/****************************************************************/
/****************POINT DE DEMARAGE DU PROJET********************/
/***************************************************************/
export class Configuration  {
    private BaseConfig = BaseConfig;
    constructor(){
       
    }  
    run() {
        this.BaseConfig.runApplication();
    } 
}