import {Plato} from "./plato.model";

export class DataSource{

    private data: Plato[];

    constructor(){
        this.data = new Array<Plato>(
            new Plato(1, "Huevos Fritos",7,"Primero"),
            new Plato(2, "Pastel chocolate",12,"Postre"),
            new Plato(3,"Gazpacho",9, "Primero"),
            new Plato(4,"Callos",15,"Segundo")  
        );
    }
    getData():Plato[]{
        return this.data;
    }
}