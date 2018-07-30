import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssistantComponent } from './assistant/assistant.component';
import { HostComponent } from './host/host.component';

const routes: Routes = [
  {
    path: 'registry',
    component: HomeComponent
  },
  {
    path: 'registry/assistant',
    component: AssistantComponent
  },
  {
    path: 'registry/host',
    component: HostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistryRoutingModule { }
