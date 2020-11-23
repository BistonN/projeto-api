import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'login',    component: LoginComponent,    children: [] },
  { path: 'home',     component: HomeComponent,     children: [] },
  { path: 'cadastro', component: CadastroComponent, children: [] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
