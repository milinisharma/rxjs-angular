import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ObservableType {
  id?: string;
  name?: string;
  description?: string;
  routerLink?: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  observableType:  ObservableType[] = [];
  operatorType: ObservableType[] = [];

  constructor (
    private router: Router
  ) {

  }

  ngOnInit () {
    this.observableType = [
      { id: '1', name: 'From-Event', description: 'Turns a DOM event into a stream (like listening to clicks 🖱️)', routerLink: 'from-event'  },
      { id: '2', name: 'Interval', description: 'Emits numbers every n milliseconds (like a timer ⏲️)', routerLink: 'interval' },
      { id: '3', name: 'Timer', description: 'Emit only once after delay as well as repeatedly with delay + interval', routerLink: 'timer' },
      { id: '4', name: 'Of', description: 'Emits static values (like a box of cookies)', routerLink: 'of' },
      { id: '5', name: 'From', description: 'Converts arrays, Promises, or strings', routerLink: 'from' },
      { id: '6', name: 'Custom Observable', description: 'Custom logic (like your coffee example ☕)', routerLink: 'interval' },
    ];

    this.operatorType = [
      { id: '1', name: 'to-array', description: '', routerLink: 'to-array' },
    ]
  }

  openObservableType (url: string | undefined) {
    this.router.navigate([`observables/${url}`]);
  }

}
