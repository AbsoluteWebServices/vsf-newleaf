import { ComputedProperty } from '@vue-storefront/core';
import { Warranties, WarrantySearchParams } from './warranty';

export interface UseWarrantyErrors {
  search: Error | null;
}

export interface UseWarranty {
  warranties: ComputedProperty<Warranties>;
  search: (params: WarrantySearchParams) => Promise<void>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UseWarrantyErrors>;
}
