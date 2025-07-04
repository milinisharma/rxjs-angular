import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';
import { PromisesComponent } from './components/promises/promises.component';
import { ListComponent } from './components/observables/list/list.component';
import { FromEventComponent } from './components/observables/from-event/from-event.component';
import { IntervalComponent } from './components/observables/interval/interval.component';
import { TimerComponent } from './components/observables/timer/timer.component';
import { OfComponent } from './components/observables/of/of.component';
import { FromComponent } from './components/observables/from/from.component';
import { NewObservableComponent } from './components/observables/new-observable/new-observable.component';

const routes: Routes = [
  {
    path: 'observables', component: ObservablesComponent, children: [
      { path: '', component: ListComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'of', component: OfComponent },
      { path: 'from', component: FromComponent },
      { path: 'new-observable', component: NewObservableComponent },
    ]
  },
  {
    path: 'promises', component: PromisesComponent
  },
  {
    path: '**', redirectTo: 'promises'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
