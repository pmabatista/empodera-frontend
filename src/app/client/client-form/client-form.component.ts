import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoDynamicFormFieldChanged } from '@po-ui/ng-components';
import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  title = 'Novo cliente';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/clients',
    save: '/clients',
  };

  public fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { label: 'Nome', property: 'name', divider: 'Dados do cliente' },
    { label: 'CPF/CNPJ', property: 'document' },
    { label: 'Telefone', property: 'phone', mask: '(99)99999-9999' },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['id'] ? 'Editando' : 'Nova cliente';
    });
  }

  
}
