import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clients',
    loadChildren: () =>
      import('../app/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'contracts',
    loadChildren: () =>
      import('../app/contract/contract.module').then((m) => m.ContractModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
