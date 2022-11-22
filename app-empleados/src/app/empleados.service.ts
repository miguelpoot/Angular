import { Empleado } from "./empleado.module";

export class EmpleadosService{
    empleados:Empleado[]=[


        new Empleado("Miguel", "Poot", "Programador", 8000),
        new Empleado("Leonardo", "Poot", "Cocinero", 7000),
        new Empleado("Nancy", "Poot", "Presidenta", 11000),
        new Empleado("Jesus", "Poot", "Empresario", 81000),
    
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);
      }
}