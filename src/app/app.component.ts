import { Component } from '@angular/core';
import { ExampleService } from './app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Disciplina } from '../dados/disciplina';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loginForm: FormGroup;
  fb: FormBuilder;
  Disciplina: Disciplina;

  constructor(private ExampleService: ExampleService) {

    }

  ngOnInit() {
    this.ExampleService.getDisciplinas();
    this.Disciplina = new Disciplina();
    this.Disciplina.nome="teste";
    this.Disciplina.curso="es";

    this.ExampleService.insereDisciplina(this.Disciplina);

    this.ExampleService.insereDisciplina(this.Disciplina).subscribe(
      response => {
        console.log(response);
      });
    this.ExampleService.excluirDisciplina('1').subscribe(
        response => {
          console.log(response);
        });
    
    this.ExampleService.atualizarDisciplina('1',this.Disciplina).subscribe(
      response => {
        console.log(response);
      });

    console.log("test");  
    this.ExampleService.getDisciplinas().subscribe(
      response => {
        console.log(response);
      });

    

    
    
  }

}
