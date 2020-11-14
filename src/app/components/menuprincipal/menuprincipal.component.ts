import { Component, OnInit } from '@angular/core';
import {Plato} from './../../datamodel/plato.model';
import {DataSource} from './../../datamodel/datasource.model';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {

  public dataSource : DataSource;
  public platos: Plato[];
  newPlato : Plato = new Plato();
  categoria = "";
  public plato: Plato;

  constructor() {
    this.dataSource = new DataSource();
    this.platos = new Array<Plato>();
    this.dataSource.getData().forEach(p=> this.platos.push(p));
  }

  getPlatos():Plato[]{
    return this.platos;
  }

  ngOnInit(): void {
  }


  addPlato(p: Plato){
    console.log(p);
    this.platos.push(p);
    console.log(this.platos);
  }


}
