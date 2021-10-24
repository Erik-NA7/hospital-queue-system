import { Component, OnInit } from '@angular/core';
import { VisitorsService } from '../services/visitors.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})

export class VisitorListComponent implements OnInit {
  visitors: string[];
  displayedColumns: string[] = ['nama', 'kategoriKunjungan', 'kategoriPasien', 'tanggalDaftar'];

  constructor(private visitorService: VisitorsService) {
    this.visitorService.getAll().subscribe(data => {
      this.visitors = data
      console.log(this.visitors)
    })
  }

  ngOnInit(): void {
  }

  getVisitors(): void {
    this.visitorService.getAll()
    .subscribe(
      visitors => {
        this.visitors = visitors;
        console.log(visitors);
      },
      error => {
        console.log(error);
      }
    )
  }

  refreshList(): void {
    this.getVisitors();
  }

}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {nomorAntri: 1, nama: 'Sanusi', kategoriKunjungan: "Umum", kategoriPasien: 'BPJS TK'},
//   {nomorAntri: 2, nama: 'Subrata', kategoriKunjungan: "Kategori-A", kategoriPasien: 'BPJS Mandiri'},
//   {nomorAntri: 3, nama: 'Lydia', kategoriKunjungan: "Umum", kategoriPasien: 'BPJS Mandiri'},
//   {nomorAntri: 4, nama: 'Ariza', kategoriKunjungan: "Umum", kategoriPasien: 'BPJS TK'},
//   {nomorAntri: 5, nama: 'Vincent', kategoriKunjungan: "Umum", kategoriPasien: 'BPJS TK'},
//   {nomorAntri: 6, nama: 'Yuni', kategoriKunjungan: "Umum", kategoriPasien: 'BPJS Mandiri'},
//   {nomorAntri: 7, nama: 'Desta', kategoriKunjungan: "Kategori-B", kategoriPasien: 'BPJS TK'},
//   {nomorAntri: 8, nama: 'Ariessa', kategoriKunjungan: "Umum", kategoriPasien: 'BPJS TK'},
//   {nomorAntri: 9, nama: 'Martin', kategoriKunjungan: "Umum", kategoriPasien: 'BPJS TK'},
//   {nomorAntri: 10, nama: 'Nemo', kategoriKunjungan: "Umum", kategoriPasien: 'BPJS Mandiri'},
// ];