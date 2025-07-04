import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { AddChocolatesService } from 'src/app/services/add-chocolates.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, AfterViewInit{

  orderMsg !: string;
  orderSubscription !: Subscription;

  constructor(
    private pieService: AddChocolatesService
  ) {}

  ngOnInit() {}

  addPie() {
    console.log("Waiting for customer to start ordering!");
    const pie = timer(3000, 1000);
    this.orderSubscription = pie.subscribe((response: any) => {
      console.log(response);
      this.orderMsg = "Pie Ordered " + response;
      this.pieService.addChocolate(this.orderMsg, 'pieList1');
      this.pieService.addChocolate(this.orderMsg, 'pieList2');

      if (response >= 10) {
        this.orderSubscription.unsubscribe();
      }
    });
  }

  ngAfterViewInit() {}


}
