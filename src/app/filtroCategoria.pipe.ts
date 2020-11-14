import {Pipe, PipeTransform} from "@angular/core";
import {Plato} from "./datamodel/plato.model";

@Pipe({
    name:"filtroCat",
    pure:false
})

export class FiltroCategoria implements PipeTransform{
    transform(platos: Plato[], categoria:string):Plato[]{
        return categoria == "" ? platos 
        : platos.filter(p=> p.category == categoria);
    }
}