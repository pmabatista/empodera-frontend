import { ContractStatus } from "../models/client.model";

export interface ClientDto {
    id: string;
    name: string;
    document: string;
    phone: string;
    contractId: string;
    contractNumber: string;
    contractValue: number;
    contractDate: string;
    contractStatus: ContractStatus;
  }