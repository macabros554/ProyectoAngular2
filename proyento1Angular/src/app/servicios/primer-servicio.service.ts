import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimerServicioService {
  constructor() { }


  servers=[
      {
      id: 1,
      name: 'Productionserver',
      status: 'online'
      },
      {
      id: 2,
      name: 'Testserver',
      status: 'offline'
      },
      {
      id: 3,
      name: 'Devserver',
      status: 'offline'
      }
    ]
}
