import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  produtos: any

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getProdutos().subscribe(results => {
      this.produtos = results['response'];
      console.log(this.produtos)
    }, error => {
      console.log(error)
    })
  }


}
