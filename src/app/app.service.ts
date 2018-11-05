import { Injectable } from '@angular/core';
import { EXEMPLO_API } from '../app.api';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ExampleService {

  private url = EXEMPLO_API;

//   console.log("URL"+url);
//   usuarioLogado: Usuario

  constructor(private http: HttpClient) { }

  getProdutos(){
    console.log("usando service");
    console.log(this.url);
  }

//   setUsuario(user: Usuario) {
//       this.usuarioLogado = user
//   }

//   getUsuario(){
//       return this.usuarioLogado
//   }

//   efetuarLogin(usuario: Usuario): any{
//     return this.http.post<any>(this.url + "/login", usuario);
//   }
  
//   efetuarLogout(): any{
//     return this.http.get<any>(this.url + "/logout");
//   }

//   estaLogado(): boolean {
//     return this.usuarioLogado !== undefined
//   }
}
