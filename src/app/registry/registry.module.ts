import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryRoutingModule } from './registry-routing.module';
import { HomeComponent } from './home/home.component';
import { AssistantComponent } from './assistant/assistant.component';
import { HostComponent } from './host/host.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistryService } from './registry.service';

@NgModule({
  imports: [
    CommonModule,
    RegistryRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, AssistantComponent, HostComponent],
  providers: [HttpClient, RegistryService]
})
export class RegistryModule { }
