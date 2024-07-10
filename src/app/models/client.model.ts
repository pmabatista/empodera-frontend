export interface Client {
    id: number;
    name: string;
    document: string;
    phone: string;
    contract: Contract;
  }
  
  export interface Contract {
    id: number;
    contractNumber: string;
    contractValue: number;
    contractDate: Date;
    status: ContractStatus;
  }
  
  export enum ContractStatus {
    Overdue = 'Em Atraso',
    OnTime = 'Dentro do Prazo',
    Paid = 'Pago',
    Canceled = 'Cancelado',
  }
  