import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rxjs-angular';
  items !: MenuItem[];

  constructor (
    private router: Router,
  ) {}
  
  ngOnInit(): void {
    this.items = [
      // {
      //     label: 'Home',
      //     icon: 'pi pi-home'
      // },
      {
          label: 'Promises',
          icon: 'pi pi-key',
          command: () => {
            this.routeTo(1);
        }
      },
      {
          label: 'Observables',
          icon: 'pi pi-warehouse',
          command: () => {
            this.routeTo(0);
          }
      },
      // {
      //     label: 'Contact',
      //     icon: 'pi pi-envelope'
      // }
  ]

  }

  routeTo (id: number) {
    if (id === 1) {
      this.router.navigate(['/promises']);
    } else {
      this.router.navigate(['/observables']);
    }
  }

}
