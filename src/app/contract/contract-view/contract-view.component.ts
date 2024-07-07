import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PoPageDynamicDetailActions, PoPageDynamicDetailField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.css'],
})
export class ContractViewComponent implements OnInit {
  title = 'Visualizando';

  readonly actions: PoPageDynamicDetailActions = {
    back: '/contracts',
    edit: '/contracts/edit/:id',
    remove: '/contracts',
  };

  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', key: true, divider: 'Dados do contrato' },
    { property: 'contractNumber', label: 'Nº do Contrato' },
    { property: 'contractDate', label: 'Data do Contrato', type: 'date' },
    { property: 'contractValue', label: 'Valor do Contrato' },
    { property: 'status', label: 'Status' },

  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['id']
        ? `Visualizando Contrato ${params['id']}`
        : 'Visualizando';
    });
  }
}

