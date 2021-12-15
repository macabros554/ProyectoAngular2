import { Injectable } from '@angular/core';
import { InterfaceUsuario } from '../interfaces/interfaz-usuario';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiUsuarioService {

  constructor(private http:HttpClient) { }

  enlace:string="http://localhost:3000/users";
  resultado!:InterfaceUsuario[];

  buscarUsuarios(){
    this.http.get<InterfaceUsuario[]>(this.enlace).subscribe((resp) => {
      this.resultado = resp;
    })
  }
}
