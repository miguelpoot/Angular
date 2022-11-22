import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.module";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,private loginService:LoginService){}


cargarEmpleados(){

    const token=this.loginService.getIdToken();
    return this.httpClient.get('https://mis-clientes-1a53f-default-rtdb.firebaseio.com/datos.json?auth=' + token);
}



    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://mis-clientes-1a53f-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

        Response=>console.log("Se han guardado los empleados" + Response),
        error=>console.log("Error: " + error),
        );
    }

    actualizarEmpleado(indice:number,empleado:Empleado){

        let url='https://mis-clientes-1a53f-default-rtdb.firebaseio.com/datos/'+ indice + '.json';

        this.httpClient.put(url,empleado).subscribe(

        Response=>console.log("Se han modificado correctamente el empleado:" + Response),
        error=>console.log("Error: " + error),
        );
    }



    eliminarEmpleado(indice:number){

        let url='https://mis-clientes-1a53f-default-rtdb.firebaseio.com/datos/'+ indice + '.json';

        this.httpClient.delete(url).subscribe(

        Response=>console.log("Se han eliminado correctamente el empleado:" + Response),
        error=>console.log("Error: " + error),
        );
    }




}