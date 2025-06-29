import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AddChocolatesService } from 'src/app/services/add-chocolates.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit{

  @ViewChild('addBtn', { static: false }) addBtn!: ElementRef;

  constructor(
    private chocolateService: AddChocolatesService
  ) { 

  }

  ngOnInit() {

  }

 

  ngAfterViewInit () {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((response: any) => {
      let chocolateAdded = 'Chocolate ' + count++
      console.log(chocolateAdded, 'chocolateList')
      this.chocolateService.addChocolate (chocolateAdded, 'chocolateList')
      this.chocolateService.addChocolate (chocolateAdded, 'chocolateList2')
    });
  }
}
