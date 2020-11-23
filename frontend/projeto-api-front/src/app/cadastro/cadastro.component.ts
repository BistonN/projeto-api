import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) { }

  get email(): AbstractControl { return this.cadastroForm.get('email'); }
  get senha(): AbstractControl { return this.cadastroForm.get('senha'); }
  get nome(): AbstractControl { return this.cadastroForm.get('email'); }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      nome: ['', Validators.required]
    });
  }

  cadastro(){
    if (!this.cadastroForm.invalid) {
      this.api.cadastro(this.cadastroForm.value).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error)
      })
    }
  }

}
