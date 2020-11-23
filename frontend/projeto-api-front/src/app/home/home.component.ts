import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as copy from 'copy-to-clipboard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  produtos: any
  svg: SafeHtml;
  closeResult: string;

  svgContent: any;
  code: any;

  colorForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  get senha(): AbstractControl { return this.colorForm.get('color'); }

  ngOnInit() {
    this.colorForm = this.formBuilder.group({
      color: ['#000000']
    });

    this.apiService.getProdutos().subscribe(results => {
      this.produtos = results['response'];
      console.log(this.produtos)
    }, error => {
      console.log(error)
    })
  }

  renderSVG(svgContent) {
    this.svg = this.sanitizer.bypassSecurityTrustHtml(svgContent);
    return this.svg
  }

  open(content, title, code) {
    this.code = title
    this.svgContent = code
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  copyCode(code) {
    let color = this.colorForm.value.color;
    console.log('cor: ',color);
    code = code.replace(/#000000/g, color);
    copy(code);
  }


}
