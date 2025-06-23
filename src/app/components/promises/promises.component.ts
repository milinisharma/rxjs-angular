import { Component } from '@angular/core';



@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})

export class PromisesComponent {

  showPromiseResults: boolean = false;
  promiseRes: any;

  showAsyncAwaitResults: boolean = false;
  asyncRes: any;
  chocolates!: any;
  chocolatesList: any = [
    {
      name: "Bournville",
      cost: 75,
      category: "Dark Chocolate",
      quantity: 10
    },
    {
      name: "Kitkat",
      cost: 55,
      category: "Chocolate Wafer",
      quantity: 12    
    },
    {
      name: "Cadbury",
      cost: 50,
      category: "Milk Chocolate",
      quantity: 11
    },
    {
      name: "Galaxy",
      cost: 65,
      category: "Milk Chocolate",
      quantity: 5
    },
  ]

  bournville: any = {
    name: "Bournville",
    cost: '75 Rupees',
    flavour: 'Fruit & Nut',
    type: 'Dark Chocolate'
  }

  kitkat: any = {
    name: 'Kitkat',
    cost: '50 Rupees',
    flavour: 'Raspberry Coated',
    type: 'Chocolate Wafer'
  }

  noChocolate: any = {
    name: "-",
    cost: '-',
    flavour: 'No information available',
    type: 'Not Available'
  }

  constructor () {}

    ngOnInit () {
      // const chocolates = new Promise ((resolve, reject) => {
      //   // resolve ('We have got the chocolates');
      //   reject ("We haven't got any chocolates")
      // })
    }

    isBournvilleAvailable () {
      return false;
    }

    isKitkatAvailable () {
      return true;
    }

    getChocolate() {
      const chocolates = new Promise ((resolve, reject) => {
        if (this.isBournvilleAvailable()) {
          return setTimeout(() => {
            resolve (this.bournville); 
          }, 2000)
        } else if (this.isKitkatAvailable()) {
          return setTimeout(()=> {
            resolve (this.kitkat);
          }, 2000)
        } else {
          return setTimeout(() => {
            resolve (this.noChocolate);
          })
        }
      });
      
      // Getting the response for promise when subscribed
      chocolates
       .then((response: any) => this.promiseRes = response)
       .catch((error: any) => this.promiseRes = error)
       .finally(() => this.showPromiseResults = true)
    }

    async startAsyncFunction () {
      let promiseRes = new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve(this.chocolatesList)
        }, 2000)
      });

      let response = await promiseRes;
      this.chocolates = response;
      console.log(this.chocolates);
      this.showAsyncAwaitResults = true;
    }
}
