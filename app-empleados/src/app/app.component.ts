import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

constructor(private loginService:LoginService){
  //this.empleados=this.empleadosService.empleados;
}
  ngOnInit(): void {
  

    firebase.initializeApp({

  apiKey: "AIzaSyDnl_qn5rbDcStMT3fHLcFpSfp99S7WcVs",
  authDomain: "mis-clientes-1a53f.firebaseapp.com",

    });

  }


estaLogueado(){
  return this.loginService.estaLogueado();
}

logout(){
  return this.loginService.logout();
}


}
