import { Component } from '@angular/core';
import { ExampleService } from './app.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Disciplina } from '../dados/disciplina';
import { Professor } from '../dados/professor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  exampleForm: FormGroup;
  Disciplina: Disciplina;
  disciplinas: Disciplina[]
  identificador: String
  Professor: Professor;

  constructor(private ExampleService: ExampleService) {

  }

  ngOnInit() {
    this.ExampleService.getDisciplinas();
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
    window.location.reload();
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

    this.getDisciplinas();
    window.location.reload(); 

  }

  atualizaDisciplina(newdata){
    this.Disciplina = new Disciplina();
    this.Disciplina.nome=newdata.nome;
    this.Disciplina.curso=newdata.curso;
    alert(this.Disciplina.nome + " " + this.Disciplina.curso);

    this.ExampleService.atualizarDisciplina(newdata.id,this.Disciplina).subscribe(
      response => {
        console.log(response);
      });
    
    this.getDisciplinas();
    window.location.reload();

  }

  buscaProfessor(iddisc){
    alert(iddisc.id);
    this.ExampleService.findProfessor(iddisc.id).subscribe(
      response => {
        console.log(response);
        console.log("Professor encontrado: ");
        console.log(response.nome);
        console.log(response.idade);
        this.Professor.nome = response.nome;
        this.Professor.idade = response.idade;
      });


  }
  

}
