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
    { property: 'id', key: true },
    { property: 'contractNumber', label: 'Nº do Contrato' },
    { property: 'contractDate', label: 'Data do Contrato', type: 'datetime'},
    { property: 'contractValue', label: 'Valor do Contrato'},
    { property: 'status', label: 'Status'}
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['id'] ? 'Editando' : 'Nova contrato';
    });
  }

}
