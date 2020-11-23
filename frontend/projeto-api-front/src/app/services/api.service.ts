import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    public API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    public getHeader() {
        return {
            headers: new HttpHeaders({
                Accept: 'application/json',
                Authorization: this.getToken()
            })
        };
    }

    public getToken() {
        const usuario = JSON.parse(localStorage.getItem('currentUser'));
        return 'Bearer ' + (usuario ? usuario.token : '');
    }

    getProdutos() {
        return this.http.get(`${this.API_URL}/produtos`);
    }

    login(form: any) {
        return this.http.post(`${this.API_URL}/usuarios/login`, form);
    }

    cadastro(form: any) {
        return this.http.post(`${this.API_URL}/usuarios/cadastro`, form);
    }
}