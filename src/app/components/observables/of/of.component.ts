import { Component } from '@angular/core';
import { of } from 'rxjs';
import { AddChocolatesService } from 'src/app/services/add-chocolates.service';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {

  cookieBaked: any;
  cookieObj = {
    a: "Cookie Baked 1",
    b: "Cookie Baked 2",
    c: "Cookie Baked 3",
    d: "Cookie Baked 4",
    e: "Cookie Baked 5"
  }

  cookiesReceived: any;

  constructor(
    private addChocolate: AddChocolatesService
  ) {}

  ngOnInit() {}

  bakeCookies() {

    const bakeCookie = of('Cookie Baked 1', 'Cookie Baked 2', 'Cookie Baked 3');
    bakeCookie.subscribe((response: any) => {
      this.addChocolate.addChocolate(response, 'cookieList1');
    });

    const bakeCookieObj = of(this.cookieObj);
    bakeCookieObj.subscribe((response: any) => {
      // this.addChocolate.addChocolate(response, 'cookieList2');
      this.cookiesReceived = response;
    })
    
  }

}
