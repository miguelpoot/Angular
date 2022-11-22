import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empledo-c',
  templateUrl: './caracteristicas-empledo-c.component.html',
  styleUrls: ['./caracteristicas-empledo-c.component.css']
})
export class CaracteristicasEmpledoCComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

constructor(private miServicio:ServicioEmpleadosService){}

agregaCaracteristicas(value:string){
  this.miServicio.muestraMensaje(value);
  this.caracteristicasEmpleados.emit(value);
}

}
