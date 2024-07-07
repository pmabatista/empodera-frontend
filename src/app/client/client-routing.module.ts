import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientViewComponent } from './client-view/client-view.component';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'view/:id', component: ClientViewComponent },
  { path: 'edit/:id', component: ClientFormComponent },
  { path: 'new', component: ClientFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
