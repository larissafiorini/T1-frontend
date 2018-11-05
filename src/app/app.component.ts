import { Component } from '@angular/core';
import { ExampleService } from './app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loginForm: FormGroup;
  fb: FormBuilder;
  produto: Produto;

  constructor(private ExampleService: ExampleService) {

    }

  ngOnInit() {
    this.ExampleService.getProdutos();
    this.produto = new Produto();
    this.produto.nome="teste";
    this.produto.id_eu=1;
    this.produto.curso="es";

    this.ExampleService.insereProduto(this.produto);

    this.ExampleService.insereProduto(this.produto).subscribe(
      response => {
        console.log(response);
      });
    
    console.log("test");  
    this.ExampleService.getProdutos().subscribe(
      response => {
        console.log(response);
      });
      
  }

}
