import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.module";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}




    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.post('https://mis-clientes-1a53f-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

        Response=>console.log("Se han guardado los empleados" + Response),
        error=>console.log("Error: " + error),
        );
    }
}