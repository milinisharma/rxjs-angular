import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent {

  breadSubscription!: Subscription;

  constructor() {}

  ngOnInit() {}

  bakeBreads() {

    const breadSource = interval(1000);
    this.breadSubscription = breadSource.subscribe((response: any) => {
      if (response >= 10) {
        this.breadSubscription.unsubscribe();
      }
    });
  }

}
