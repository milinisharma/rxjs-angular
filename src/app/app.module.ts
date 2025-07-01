import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';



import { PromisesComponent } from './components/promises/promises.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { ListComponent } from './components/observables/list/list.component';
import { FromEventComponent } from './components/observables/from-event/from-event.component';
import { BackBtnComponent } from './shared/back-btn/back-btn.component';
import { IntervalComponent } from './components/observables/interval/interval.component';
import { TimerComponent } from './components/observables/timer/timer.component';
import { OfComponent } from './components/observables/of/of.component';
import { NewObservableComponent } from './components/observables/new-observable/new-observable.component';
import { FromComponent } from './components/observables/from/from.component';



@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    ObservablesComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    BackBtnComponent,
    IntervalComponent,
    TimerComponent,
    OfComponent,
    NewObservableComponent,
    FromComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    TableModule,
    DataViewModule,
    TagModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
