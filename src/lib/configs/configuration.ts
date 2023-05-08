import { BaseConfig } from "./baseconfig";

/**
 * @description Configuration Starting point 
 */
export class Configuration  {
    private BaseConfig = BaseConfig;
    constructor(){
       
    }  
    run() {
        this.BaseConfig.runApplication();
    } 
}