import { Component } from '@angular/core';
import { ExampleService } from './app.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Disciplina } from '../dados/disciplina';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  exampleForm: FormGroup;
  fb: FormBuilder;
  Disciplina: Disciplina;
  disciplinas: Disciplina[]
  identificador: String
  heroes:boolean


  

  constructor(private ExampleService: ExampleService) {
    this.fb = new FormBuilder();
   
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
    this.getDisciplinas();
  }

  deletarDisciplina(id){
    alert("Id : " + id.number);
    this.ExampleService.excluirDisciplina(id.number).subscribe(
      response => {
        console.log(response);
        alert("resposta "+response);
      });
    this.getDisciplinas();
  }

  getDisciplinas(){
    this.ExampleService.getDisciplinas().subscribe(
      response => {
        console.log(response);
        this.disciplinas = response;
        console.log("Disciplinas: ");
        console.log(this.disciplinas);

      });
  }

  insertDisciplina(ins){
    this.Disciplina = new Disciplina();
    this.Disciplina.nome=ins.nome;
    this.Disciplina.curso=ins.curso;
    alert(this.Disciplina.nome + " " + this.Disciplina.curso);

    this.ExampleService.insereDisciplina(this.Disciplina).subscribe(
      response => {
        console.log(response);
      });

    
  }

}
