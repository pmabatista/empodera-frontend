import { Component } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableCustomTableAction,
  PoPageDynamicTableField,
} from '@po-ui/ng-templates';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent {
  constructor(private contractService: ContractService) {}
  readonly actions: PoPageDynamicTableActions = {
    detail: 'clients/view/:id',
    edit: 'clients/edit/:id',
    new: 'clients/new',
    remove: true,
  };

  readonly customActions: PoPageDynamicTableCustomTableAction[] = [
    {
      label: 'Cancelar Contrato',
      action: this.cancelContract.bind(this),
    },
  ];

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'name', label: 'Nome' },
    { property: 'document', label: 'CPF/CNPJ' },
    { property: 'phone', label: 'Telefone' },
    { property: 'contract.contractNumber', label: 'Contrato' },
  ];

  cancelContract(client: any): void {
    this.contractService.cancelContract(client?.contract?.id).subscribe(
      () => {
        console.log('Contrato cancelado com sucesso!');},
      (error) => {
        console.error('Erro ao cancelar contrato:', error);
      }
    );
  }
}
