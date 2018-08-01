import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {EventsRoutingModule} from './events-routing.module';
import { CreateComponent } from './create/create.component';
import { EventsService } from './events.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, CreateComponent],
  providers: [EventsService]
})
export class EventsModule { }
