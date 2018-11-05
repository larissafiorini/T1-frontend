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
  disciplinasProfessor: Disciplina[] = []
  professores: Professor[]
  identificador: String
  Professor: Professor;

  constructor(private ExampleService: ExampleService) {

  }

  ngOnInit() {
    this.ExampleService.getDisciplinas();
    this.getDisciplinas();
    this.getProfessores();
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


  getProfessores(){
    this.ExampleService.getProfessores().subscribe(
      response => {
        console.log(response);
        this.professores = response;
        console.log("Professores: ");
        console.log(this.professores);

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

  insertProfessor(insp){
    this.Professor = new Professor();
    this.Professor.nome=insp.nome;
    this.Professor.idade=insp.idade;
    alert(this.Professor.nome + " " + this.Professor.idade);

    this.ExampleService.insereProfessor(this.Professor).subscribe(
      response => {
        console.log(response);
      });

    this.getProfessores();
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
        console.log("Disciplinas encontradas: ");
        response.forEach(element => {
          console.log(element.nome);
          console.log(element.curso);
          let disciplina = {  nome: element.nome, curso: element.curso }
          this.disciplinasProfessor.push(disciplina);
          // this.Professor.nome = response.nome;
          // this.Professor.idade = response.idade;
        });
      });


  }


}
