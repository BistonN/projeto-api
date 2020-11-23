import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService
  ) { }

  get email(): AbstractControl { return this.loginForm.get('email'); }
  get senha(): AbstractControl { return this.loginForm.get('senha'); }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  login() {
    localStorage.clear();

    if (this.loginForm.invalid) {
      console.log('invalid form')
      return;
    }

    this.api.login(this.loginForm.value).subscribe((data: {token: any, email: string}) => {
      if(data.token) {
        this.setUsuarioLogado(data.token, data.email);
      }
      this.router.navigate(['/home']);
    }, error => {
      console.log(error)
    })
  }

  setUsuarioLogado(token: any, email: any) {
    localStorage.setItem('currentUser', JSON.stringify({
      token: token,
      email: email
    }));
    this.router.navigate(['/home']);
  }

  goCadastro() {
    this.router.navigate(['/cadastro']);
  }

}
