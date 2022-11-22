import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.module";
import { ServicioEmpleadosService } from "./servicio-empleados.service";


@Injectable()
export class EmpleadosService{


  constructor(private servicioVentanaEmergente:ServicioEmpleadosService, private dataService:DataServices){


  }




    empleados:Empleado[]=[


        new Empleado("Miguel", "Poot", "Programador", 8000),
        new Empleado("Leonardo", "Poot", "Cocinero", 7000),
        new Empleado("Nancy", "Poot", "Presidenta", 11000),
        new Empleado("Jesus", "Poot", "Empresario", 81000),
    
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:" + "\n" +
        empleado.nombre + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);


        this.dataService.guardarEmpleados(this.empleados);

      }

        encontrarEmpleado(indice:number){

          let empleado:Empleado=this.empleados[indice];

          return empleado;

        }

        actualizarEmpleado(indice:number, empleado:Empleado){
          let empleadoModificado=this.empleados[indice];

          empleadoModificado.nombre=empleado.nombre;
          empleadoModificado.apellido=empleado.apellido;
          empleadoModificado.cargo=empleado.cargo;
          empleadoModificado.salario=empleado.salario;
        }


        eliminarEmpleado(indice:number){
          this.empleados.splice(indice,1);
        }

}