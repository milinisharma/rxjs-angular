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

    let CroissantsArr = [
      "Croissant 1",
      "Croissant 2",
      "Croissant 3",
      "Croissant 4",
      "Croissant 5",
    ]

    const bakeCroissant = from(CroissantsArr);
    bakeCroissant.subscribe((response: any) => {
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

    const bakeCroissantstring = from("Croissants are baked ~String");
    bakeCroissantstring.subscribe((response: any) => {
      this.chocolateService.addChocolate(response, 'croissantList3')
    });

    const cIterator: any = this.bakeCroissantsFromI(5);
    const bakeCroissantsI = from(cIterator);
    bakeCroissantsI.subscribe((response: any) => {
      this.chocolateService.addChocolate(response, 'croissantList4')
    })
}

  * bakeCroissantsFromI(count: number) {
    let i = 1;
      for(i=1; i <= count; i++) {
         yield `Croissant ${i} is baked`;
    }
  }

}

