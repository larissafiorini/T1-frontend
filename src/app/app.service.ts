import { Injectable } from '@angular/core';
import { EXEMPLO_API } from '../app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Disciplina } from '../dados/disciplina';
import { Professor } from '../dados/professor';



@Injectable()
export class ExampleService {

  private url = EXEMPLO_API;

  constructor(private http: HttpClient) { }

  getDisciplinas(): Observable<any>{
    console.log("usando service");
    return this.http.get<any>(this.url + "api/disciplina");

  }

  getProfessores(): Observable<any>{
    console.log("usando service");
    return this.http.get<any>(this.url + "api/professor");

  }

  insereDisciplina(Disciplina: Disciplina): Observable<Disciplina>{
    console.log("inserindo");
    return this.http.post<any>(this.url + "api/disciplina", Disciplina);
  }

  insereProfessor(Professor: Professor): Observable<Professor>{
    console.log("inserindo prof");
    return this.http.post<any>(this.url + "api/professor", Professor);
  }

  excluirDisciplina(id: string): Observable<Disciplina> {
    console.log("excluindo");

    return this.http.delete<Disciplina>(`${this.url}api/disciplina/${id}`);
  }

  atualizarDisciplina(id: string, Disciplina: Disciplina): Observable<Disciplina> {
    console.log("atualizando");

    return this.http.put<Disciplina>(`${this.url}api/disciplina/${id}`,Disciplina );
  }

  findProfessor(id_disciplina: string)  : Observable<Disciplina[]> {
    console.log("buscando professor pelo id da disciplina");

    return this.http.get<Disciplina[]>(`${this.url}api/disciplina/find_by_professor/${id_disciplina}`);
  }





}
