import { Component } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
})
export class ContractListComponent {
  readonly actions: PoPageDynamicTableActions = {
    detail: '/contracts/view/:id',
    edit: '/contracts/edit/:id',
    new: '/contracts/new',
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true },
    { property: 'contractNumber', label: 'Nº do Contrato' },
    { property: 'contractDate', label: 'Data do Contrato', type: 'date' },
    { property: 'contractValue', label: 'Valor do Contrato'},
    { property: 'status', label: 'Status'},
    { property: 'client.name', label: 'Cliente'}
  ];
}
