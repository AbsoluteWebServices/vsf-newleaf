import { CustomQuery } from '@vue-storefront/core';
import { Warranties, WarrantySearchParams } from './warranty';

export interface NewleafApiMethods {
  getWarranty(params: WarrantySearchParams, customQuery?: CustomQuery): Promise<Warranties>;
}
