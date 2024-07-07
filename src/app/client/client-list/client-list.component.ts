import { Component } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent {
  readonly actions: PoPageDynamicTableActions = {
    detail: 'clients/view/:id',
    edit: 'clients/edit/:id',
    new: 'clients/new',
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true },
    { property: 'name', label: 'Nome' },
    { property: 'document', label: 'CPF/CNPJ' },
    { property: 'phone', label: 'Telefone' },
  ];
}
