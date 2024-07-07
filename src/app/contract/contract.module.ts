import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContractListComponent, ContractViewComponent, ContractFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
