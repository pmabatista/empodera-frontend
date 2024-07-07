import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PoPageDynamicDetailActions, PoPageDynamicDetailField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css'],
})
export class ClientViewComponent implements OnInit {
  title = 'Visualizando';

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
      label: 'CPF/CNPJ',
      gridXlColumns: 4,
      gridLgColumns: 4,
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['id']
        ? `Visualizando Cliente ${params['id']}`
        : 'Visualizando';
    });
  }
}
