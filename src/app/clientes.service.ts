import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl='http://localhost:3000/api/clientes';
  //private baseUrlid='http://localhost:3000/clientes/:id';

  constructor(private httpClient: HttpClient) { }


}
