import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicioUsuariosService } from 'src/app/servicio-usuarios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private bsService:ServicioUsuariosService) { }

  ngOnInit(): void {
    this.bsService.buscarUsuarios();
  }

  get usuarios(){
    return this.bsService.resultado;
  }
}
