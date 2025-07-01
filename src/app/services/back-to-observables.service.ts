import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackToObservablesService {

  constructor(
    private router: Router
  ) { }

  backToObservables() {
    this.router.navigate(['/observables']);
    console.log("Hi from back to observable service");
    
  }
}
