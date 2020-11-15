import {Plato} from "./plato.model";

export class DataSource{

    private data: Plato[];

    constructor(){
        this.data = new Array<Plato>(
            new Plato(1, "Huevos Fritos",7,"Primero","https://www.demoslavueltaaldia.com/sites/default/files/huevos-fritos-vuelta-vuelta.jpg"),
            new Plato(2, "Pastel chocolate",12,"Postre","https://www.kenwoodworld.com/Global/Countries/Spain/Postres/Tarta%20chocolate_2.jpg"),
            new Plato(3,"Gazpacho",9, "Primero","https://www.ecestaticos.com/image/clipping/b3e3cba7d0a851c193e26a3d507628aa/opening.jpg"),
            new Plato(4,"Callos",15,"Segundo","https://canalcocina.es/medias/_cache/zoom-cb4db8bdd396234f4c982046099d707d-920-518.jpg")  
        );
    }
    getData():Plato[]{
        return this.data;
    }
}