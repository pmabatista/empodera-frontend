import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForceOptionComponentEnum, PoNotificationService, PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters } from '@po-ui/ng-templates';
import { ClientService } from '../../services/client.service';
import { ContractService } from '../../services/contract.service';
import { Client, ContractStatus } from '../../models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [PoNotificationService],
})
export class ClientListComponent implements OnInit {
  public clients: Client[] = [];

  readonly pageActions: PoPageAction[] = [
    { label: 'Novo', url: '/clients/new', icon: 'po-icon-plus'},
    { label: 'Atualizar', action: this.resetFilters.bind(this), icon: 'po-icon-refresh'}
  ]

  readonly tableActions: PoTableAction[] = [
    {
      action: this.cancelContract.bind(this),
      icon: 'po-icon-close',
      label: 'Cancelar Contrato',
      disabled: (client: Client) => client.contract.status === ContractStatus.Canceled,
    },
    { action: this.edit.bind(this), icon: 'po-icon-edit', label: 'Editar' },
    { action: this.details.bind(this), icon: 'po-icon-info', label: 'Visualizar' },
    { action: this.remove.bind(this), icon: 'po-icon po-icon-delete', label: 'Excluir' },
  ];

  readonly columns: PoTableColumn[] = [
    { property: 'name', label: 'Nome' },
    { property: 'document', label: 'CPF/CNPJ' },
    { property: 'phone', label: 'Telefone' },
    { property: 'contract.contractNumber', label: 'Contrato' },
    {
      property: 'contract.status',
      label: 'Status do Contrato',
      type: 'label',
      labels: [
        { value: ContractStatus.OnTime, color: 'color-11', label: 'Dentro do Prazo' },
        { value: ContractStatus.Overdue, color: 'color-08', label: 'Em Atraso' },
        { value: ContractStatus.Paid, color: 'color-10', label: 'Pago' },
        { value: ContractStatus.Canceled, color: 'color-07', label: 'Cancelado' },
      ],
    },
  ];

  readonly filters: PoPageDynamicSearchFilters[] = [
    {
      property: 'status',
      label: 'Status',
      options: [
        ContractStatus.OnTime,
        ContractStatus.Overdue,
        ContractStatus.Paid,
        ContractStatus.Canceled,
      ],
      forceOptionsComponentType: ForceOptionComponentEnum.radioGroup
    },
  ];

  constructor(
    private contractService: ContractService,
    private clientService: ClientService,
    private poNotification: PoNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClients();
  }

  private loadClients(filter?: string): void {
    this.clientService.getMany(filter).subscribe(
      response => this.clients = response.items,
      error => this.poNotification.error({ message: 'Erro ao carregar clientes!' })
    );
  }

  onChangeDisclaimers(disclaimers: Array<any>): void {
    if (disclaimers.length === 0) {
      this.loadClients();
    }
  }

  onAdvancedSearch(filter: any): void {
    if (filter) {
      this.loadClients(filter.status);
    } else {
      this.resetFilters();
    }
  }

  private resetFilters(): void {
    this.loadClients();
  }

  edit(client: Client): void {
    this.router.navigate(['/clients/edit', client.id]);
  }

  details(client: Client): void {
    this.router.navigate(['/clients/view', client.id]);
  }

  remove(client: Client): void {
    this.clientService.remove(client.contract.id).subscribe(
      () => this.poNotification.success({ message: 'Cliente excluído com sucesso!' }),
      () => this.poNotification.error({ message: 'Erro ao excluir cliente!' })
    );
  }

  cancelContract(client: Client): void {
    this.contractService.cancelContract(client.contract.id).subscribe(
      () => this.poNotification.success({ message: 'Contrato cancelado com sucesso!' }),
      () => this.poNotification.error({ message: 'Erro ao cancelar contrato!' })
    );
  }
}
