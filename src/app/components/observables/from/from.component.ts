import { Component } from '@angular/core';
import { from } from 'rxjs';
import { AddChocolatesService } from 'src/app/services/add-chocolates.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent {
  
  constructor(
    private chocolateService: AddChocolatesService
  ) {}

  ngOnInit() {}

  bakeCroissants() {

    let croissantsArr = [
      "Croissant 1",
      "Croissant 2",
      "Croissant 3",
      "Croissant 4",
      "Croissant 5",
    ]

    const bakeCrossaint = from(croissantsArr);
    bakeCrossaint.subscribe((response: any) => {
      console.log(response);
      this.chocolateService.addChocolate(response, 'croissantList1')
    });

    const bakeCroissantPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Croissants are baked through Promise")
      }, 2000)
    });

    const bakeCroissantP = from(bakeCroissantPromise);
    bakeCroissantP.subscribe((response: any) => {
      console.log("Promise: ", response);
      this.chocolateService.addChocolate(response, 'croissantList2');
    });

    const bakeCroissantString = from("Croissants are baked ~String");
    bakeCroissantString.subscribe((response: any) => {
      this.chocolateService.addChocolate(response, 'croissantList3')
    })





  }

}
function resolve(arg0: string) {
  throw new Error('Function not implemented.');
}

