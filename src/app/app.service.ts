import { Injectable } from '@angular/core';
import { EXEMPLO_API } from '../app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Produto } from '../produto/produto';


@Injectable()
export class ExampleService {

  private url = EXEMPLO_API;

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any>{
    console.log("usando service");
    return this.http.get<any>(this.url + "api/disciplina");

  }

  insereProduto(produto: Produto): Observable<Produto>{
    console.log("inserindo");
    return this.http.post<any>(this.url + "api/disciplina", produto);
  
  }


}
