import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PoPageDynamicDetailActions, PoPageDynamicDetailField } from '@po-ui/ng-templates';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css'],
})
export class ClientViewComponent implements OnInit {
  title = 'Visualizando';
  apiUrl = `${environment.apiUrl}/client`; 

  readonly actions: PoPageDynamicDetailActions = {
    back: '/clients',
    edit: '/clients/edit/:id',
    remove: '/clients',
  };
  
  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', key: true, divider: 'Dados do cliente' },
    { property: 'name', label: 'Nome', },
    {
      property: 'document',
      label: 'CPF/CNPJ',    },
    { property: 'phone', label: 'Telefone' },
    { property: 'contractId', visible: false },
    {
      label: 'Número do Contrato',
      property: 'contractNumber',
      divider: 'Dados do contrato',
    },
    {
      label: 'Valor do Contrato',
      property: 'contractValue',
      type: 'currency',
    },
    { label: 'Data do Contrato', property: 'contractDate', type: 'date' },
    {
      label: 'Status do Contrato',
      property: 'contractStatus',
    },  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['id']
        ? `Visualizando Cliente ${params['id']}`
        : 'Visualizando';
    });
  }
}

