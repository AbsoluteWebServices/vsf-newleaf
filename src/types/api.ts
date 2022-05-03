import { Warranties, WarrantySearchParams } from './warranty';

export interface NewleafApiMethods {
  getWarranty(params: WarrantySearchParams): Promise<Warranties>;
}
