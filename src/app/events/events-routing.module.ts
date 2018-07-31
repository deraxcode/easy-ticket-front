import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {
    path: 'events',
    component: HomeComponent
  },
  {
    path: 'events/create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
