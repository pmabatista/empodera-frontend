import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractViewComponent } from './contract-view/contract-view.component';

const routes: Routes = [
  { path: '', component: ContractListComponent },
  { path: 'view/:id', component: ContractViewComponent },
  { path: 'edit/:id', component: ContractFormComponent },
  { path: 'new', component: ContractFormComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
