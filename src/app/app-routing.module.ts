import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';
import { PromisesComponent } from './components/promises/promises.component';

const routes: Routes = [
  {
    path: 'observables', component: ObservablesComponent
  },
  {
    path: 'promises', component: PromisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
