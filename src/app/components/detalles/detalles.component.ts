import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Plato} from './../../datamodel/plato.model';
import {ConversorALibras} from './../../conversorALibras.pipe';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  providers:[ConversorALibras]
})
export class DetallesComponent implements OnInit {

  public plato:Plato;
  public mensaje: number;

  constructor(
    private _activeRoute:ActivatedRoute,
    private _router:Router, private conversorLibras:ConversorALibras) { 
    this.plato={};
  }

  convertToPounds(precio){
    console.log(precio);
    console.log(this.conversorLibras.transform(precio));
    this.mensaje = this.conversorLibras.transform(precio);
  }

  // convertToDolars(precio){
  //   this.mensaje=this.conversorDolares.transform(precio);
  // }


  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      if(params.id !=null){
        this.plato.id=params.id;
        this.plato.nombre = params.nombre;
        this.plato.price = params.price; 
        this.plato.category=params.category;
        this.plato.img=params.img;
      }else{
        console.log("no");
      }
  
    });
  }

}

//private conversorLibras:ConversorALibras,
//private conversorDolares:ConversorADolares