import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddChocolatesService {

  constructor() { }

  addChocolate(chocolateAdded: any, listId: any) {
    let ele = document.createElement('li');
    ele.innerText = chocolateAdded;
    document.getElementById(listId)?.appendChild(ele)
  }
}
