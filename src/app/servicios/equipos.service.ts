import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipo} from "../vo/equipo";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EquiposService {


  urlRest: string = environment.urlEquipos;

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Equipo[]> {
    return this.httpClient.get<Equipo[]>(this.urlRest+'', this.httpOptions);
  }
  public detail(id: number): Observable<Equipo> {
    return this.httpClient.get<Equipo>(this.urlRest +'/'+ `${id}`, this.httpOptions);
  }

  public create(entidad: Equipo): Observable<any> {
    return this.httpClient.post<any>(this.urlRest+"" , entidad, this.httpOptions);
  }

  public update(entidad ?: Equipo): Observable<any> {
    return this.httpClient.put<any>(this.urlRest+"" , entidad, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlRest+ `${id}`, this.httpOptions);
  }

}
