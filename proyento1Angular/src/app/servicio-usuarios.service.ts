import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { InterfaceUsuario } from './interfaces/interfaz-usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {
  constructor(private httpClient:HttpClient) { }

  enlace:string="http://localhost:3000/users";
  resultado!:any;

  buscarUsuarios(){
    this.httpClient.get<any>(this.enlace).subscribe((resp) => {
      this.resultado = resp;
    })
  }
}
