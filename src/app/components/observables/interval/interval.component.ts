import { AfterViewInit, Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AddChocolatesService } from 'src/app/services/add-chocolates.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, AfterViewInit {

  orderMsg!: any;
  orderSubscription!: Subscription

  constructor (
    private chocolateService: AddChocolatesService
  ) {}

  ngOnInit() {}

  addCake() {
    const packCake = interval(500);
    // Subscribe the interval
    this.orderSubscription = packCake.subscribe((response: any) => {
      console.log(response); // Emits number
      this.orderMsg = "Cake Order No: " + response
      this.chocolateService.addChocolate(this.orderMsg, 'cakeList1')
      this.chocolateService.addChocolate(this.orderMsg, 'cakeList2')
      if (response >= 10) {
        this.orderSubscription.unsubscribe();
      }
    });

  }

  ngAfterViewInit () {

  }

}
