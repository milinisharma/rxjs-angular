import { Component } from '@angular/core';
import { BackToObservablesService } from 'src/app/services/back-to-observables.service';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss']
})
export class BackBtnComponent {
  
  constructor (
    private backToObservable: BackToObservablesService
  ) {}

  ngOnInit () {}

  goBack() {
    console.log("Button Clicked");
    
    this.backToObservable.backToObservables()
  }
}
