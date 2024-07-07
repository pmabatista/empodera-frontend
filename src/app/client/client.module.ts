import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClientListComponent, ClientViewComponent, ClientFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
