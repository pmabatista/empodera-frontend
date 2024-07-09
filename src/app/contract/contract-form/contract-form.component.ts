import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
})
export class ContractFormComponent implements OnInit {
  title = 'Nova contrato';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/contracts',
    save: '/contracts',
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { property: 'contractNumber', label: 'Nº do Contrato' },
    { property: 'contractDate', label: 'Data do Contrato', type: 'datetime'},
    { property: 'contractValue', label: 'Valor do Contrato', type: 'currency'},
    { property: 'status', label: 'Status', options: ['Em Atraso', 'Dentro do Prazo', 'Pago']},
    { property: 'clientId', label: 'Cliente', optionsService: 'http://localhost:3000/client', fieldValue: 'id', fieldLabel: 'name'}
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['id'] ? 'Editando' : 'Nova contrato';
    });
  }

}
