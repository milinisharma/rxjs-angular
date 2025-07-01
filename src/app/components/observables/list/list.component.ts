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

  constructor (
    private router: Router
  ) {

  }

  ngOnInit () {
    this.observableType = [
      { id: '1', name: 'From-Event', description: 'Fires on DOM events', routerLink: 'from-event'  },
      { id: '2', name: 'Interval', description: 'Emits at regular intervals', routerLink: 'interval' },
      { id: '2', name: 'Timer', description: 'Emit only once after delay as well as repeatedly with delay + interval', routerLink: 'timer' },
      { id: '2', name: 'of', description: '', routerLink: 'of' },
      // { id: '2', name: 'Interval', description: 'Emits at regular intervals', routerLink: 'interval' },
      // { id: '2', name: 'Interval', description: 'Emits at regular intervals', routerLink: 'interval' },
      // { id: '2', name: 'Interval', description: 'Emits at regular intervals', routerLink: 'interval' },
      // { id: '2', name: 'Interval', description: 'Emits at regular intervals', routerLink: 'interval' },
    ];
  }

  openObservableType (url: string | undefined) {
    this.router.navigate([`observables/${url}`]);
  }

}
