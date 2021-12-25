import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 /*  styleUrls: ['./listado.component.css'] */
})
export class ListadoComponent {
  heroes:string[]=["Spiderman","Ironman","Viuda Negra","Bruja Escarlata"];
  heroeBorrado:string="";
  borrarHeroe():void{
    console.log("Borrando...")
    this.heroeBorrado=this.heroes.pop() || "";
  }
}
