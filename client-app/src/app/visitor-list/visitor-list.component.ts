import { Component, OnInit } from '@angular/core';
import { VisitorsService } from '../services/visitors.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})

export class VisitorListComponent implements OnInit {
  visitors: string[];
  visitor = "";

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

  searchVisitor() : void {
    this.visitorService.get(this.visitor)
    .subscribe(
      visitor => {
        this.visitors = visitor;
        console.log(visitor);
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