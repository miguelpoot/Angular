import { TemplateBindingParseResult } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
//styles:["p{background-color:red;}"]


})
export class EmpleadoComponent {

  nombre="Juan";
  apellido="Diaz";
   edad=8;


  empresa="Pildoras Informaticas";




 /* getEdad(){
    return this.edad;
  } */

 habilitacionCuadro=false;


 usuRegistrado=false;

 textoDeRegistro="No hay nadie registrado";

 getRegistroUsuario(){
   this.usuRegistrado=false;
 }



 setusuarioRegistrado(event:Event){
  
  //alert("El usuario se acaba de registrar");
 // this.textoDeRegistro="El Usuario se acaba de registrar";

if((<HTMLInputElement>event.target).value=="si"){
  this.textoDeRegistro="El Usuario se acaba de registrar";

}else{
  this.textoDeRegistro="No hay nadie registrado";
}

 }

}
