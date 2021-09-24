import { CustomQuery } from '@vue-storefront/core';
import { Warranty, WarrantySearchParams } from './warranty';

export interface NewleafApiMethods {
  getWarranty(params: WarrantySearchParams, customQuery?: CustomQuery): Promise<Warranty>;
}
