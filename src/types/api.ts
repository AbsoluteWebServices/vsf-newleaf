import { CustomQuery } from '@absolute-web/vsf-core';
import { Warranties, WarrantySearchParams } from './warranty';

export interface NewleafApiMethods {
  getWarranty(params: WarrantySearchParams, customQuery?: CustomQuery): Promise<Warranties>;
}
