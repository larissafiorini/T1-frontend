import { Injectable } from '@angular/core';
import { EXEMPLO_API } from '../app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Disciplina } from '../dados/disciplina';


@Injectable()
export class ExampleService {

  private url = EXEMPLO_API;

  constructor(private http: HttpClient) { }

  getDisciplinas(): Observable<any>{
    console.log("usando service");
    return this.http.get<any>(this.url + "api/disciplina");

  }

  insereDisciplina(Disciplina: Disciplina): Observable<Disciplina>{
    console.log("inserindo");
    return this.http.post<any>(this.url + "api/disciplina", Disciplina);
  }

  excluirDisciplina(id: string): Observable<Disciplina> {
    console.log("excluindo");
    
    return this.http.delete<Disciplina>(`${this.url}api/disciplina/${id}`);
  }








}
