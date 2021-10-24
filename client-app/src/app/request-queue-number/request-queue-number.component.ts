import { Component, OnInit } from '@angular/core';
import { QueueService } from '../services/queue.service';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})



export class RequestQueueNumberComponent implements OnInit {

  queueNumber: any;
  visitCategory = "";
  
  submitted = false;

  constructor(private queueService: QueueService)  { }

  ngOnInit(): void {
  }

  requestNumber(): void {
    const data = {
      kategoriKunjungan: this.visitCategory
    }

    this.queueService.create (data)
    .subscribe(
      response => {
        console.log(response);
        this.queueNumber = response;
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    )
  }

  newNumber(): void {
    this.visitCategory = "";
    this.submitted = false;
  } 
}
