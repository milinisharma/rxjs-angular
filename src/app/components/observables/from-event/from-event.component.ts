import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit{

  @ViewChild('addBtn', { static: false }) addBtn!: ElementRef;

  constructor() {

  }

  ngOnInit() {

  }

  addChocolate(chocolateAdded: any) {
    let ele = document.createElement('li');
    ele.innerText = chocolateAdded;
    document.getElementById('chocolateList')?.appendChild(ele)
  }

  ngAfterViewInit () {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((response: any) => {
      let chocolateAdded = 'Chocolate ' + count++
      console.log(chocolateAdded)
      this.addChocolate (chocolateAdded)
    });
  }
}
