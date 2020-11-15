import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"convertLibras"
})

export class ConversorALibras implements PipeTransform{

    transform(precio:number):number{
        const libraVal = 0.90;
        return precio * libraVal;
    }

}