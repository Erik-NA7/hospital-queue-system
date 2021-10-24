import { Component, OnInit } from '@angular/core';
import { VisitorsService } from '../services/visitors.service';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {
  visitor = {
    nama : "",
    kategoriKunjungan : "",
    kategoriPasien : "",
  };
  submitted = false;

  constructor(private crudService: VisitorsService) {}

  ngOnInit(): void {
  }

  saveVisitor():void {
    const data = {
      nama: this.visitor.nama,
      kategoriKunjungan: this.visitor.kategoriKunjungan,
      kategoriPasien: this.visitor.kategoriPasien,
    }

    this.crudService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );    
  }
  newVisitor(): void {
    this.submitted = false;
    this.visitor = {
      nama : "",
      kategoriKunjungan : "",
      kategoriPasien : "",
    }
  } 
}