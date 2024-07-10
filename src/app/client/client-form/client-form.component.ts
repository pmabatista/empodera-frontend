import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForceOptionComponentEnum } from '@po-ui/ng-components';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';
import { ContractStatus } from '../../models/client.model';

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

  public fields: PoPageDynamicEditField[] = [
    { property: 'id', key: true, visible: false },
    {
      label: 'Nome',
      property: 'name',
      divider: 'Dados do cliente',
      required: true,
      minLength: 3,
      maxLength: 100,
      errorMessage: 'Nome inválido, mínimo 3 caracteres',
    },
    {
      label: 'CPF/CNPJ',
      property: 'document',
      required: true,
      minLength: 11,
      maxLength: 14,
      errorMessage: 'CPF/CNPJ inválido, mínimo 11 caracteres e máximo 14 caracteres',
    },
    {
      label: 'Telefone',
      property: 'phone',
      mask: '(99)99999-9999',
      minLength: 14,
      maxLength: 14,
      required: true,
      maskFormatModel: false,
      errorMessage: 'Telefone inválido',
    },
    { property: 'contractId', visible: false },
    {
      label: 'Número do Contrato',
      property: 'contractNumber',
      type: 'string',
      minLength: 3,
      maxLength: 10,
      divider: 'Dados do contrato',
      errorMessage:
        'Número do contrato inválido, mínimo 3 caracteres e máximo 10 caracteres',
      required: true,
    },
    {
      label: 'Valor do Contrato',
      property: 'contractValue',
      minValue: 0,
      type: 'currency',
      errorMessage: 'O valor do contrato deve ser maior que 0',
    },
    {
      label: 'Data do Contrato',
      property: 'contractDate',
      type: 'date',
      required: true,
      format: 'dd/MM/yyyy',
      errorMessage: 'A data do contrato é obrigatória.',
    },
    {
      label: 'Status do Contrato',
      property: 'contractStatus',
      options: [
        { value: ContractStatus.Overdue, label: 'Em Atraso' },
        { value: ContractStatus.OnTime, label: 'Dentro do Prazo' },
        { value: ContractStatus.Paid, label: 'Pago' },
        { value: ContractStatus.Canceled, label: 'Cancelado', disabled: true },
      ],
      forceOptionsComponentType: ForceOptionComponentEnum.radioGroup,
      required: true,
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['id'] ? 'Editando cliente' : 'Novo cliente';
    });
  }
}
