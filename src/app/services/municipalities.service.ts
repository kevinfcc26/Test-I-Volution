import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipalitiesService {
 
  private url = 'https://pruebasasivamosffiebackend.ivolucion.com/api/common/';
  private urlDepartments = 'ListDepartamento';
  private urlMunicipality = 'ListMunicipiosByIdDepartamento?idDepartamento='
  
  constructor(private http: HttpClient) { }

  getDepartment(){
    return this.http.get(`${this.url}${this.urlDepartments}`);
  }

  getMunicipality(id){
    return this.http.get(`${this.url}${this.urlMunicipality}${id}`);
  }

}

