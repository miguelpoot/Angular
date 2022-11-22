import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.module';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  @Input()empleadoDeLista:Empleado;
  @Input()indice:number;



  empleados:Empleado[]=[


    new Empleado("Miguel", "Poot", "Programador", 8000),
    new Empleado("Leonardo", "Poot", "Cocinero", 7000),
    new Empleado("Nancy", "Poot", "Presidenta", 11000),
    new Empleado("Jesus", "Poot", "Empresario", 81000),


  ];
  empleadoAgregado(empleado:Empleado){
    this.empleados.push(empleado);
  }


  arrayCaracteristicas=[''];

  agregarCaracteristica(nuevaCarecteristica: string){
    this.arrayCaracteristicas.push(nuevaCarecteristica);
  }


  
}
