import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {EventsRoutingModule} from './events-routing.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  declarations: [HomeComponent, CreateComponent]
})
export class EventsModule { }
