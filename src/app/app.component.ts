import { Component } from '@angular/core';
import { ExampleService } from './app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loginForm: FormGroup;
  fb: FormBuilder;

  constructor(private ExampleService: ExampleService) {

    }

  ngOnInit() {
    this.ExampleService.getProdutos();
    this.ExampleService.getProdutos().subscribe(
      response => {
        console.log(response);
      });
  }

}
