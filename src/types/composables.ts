import { ComputedProperty } from '@vue-storefront/core';
import { Warranty, WarrantySearchParams } from './warranty';

export interface UseWarrantyErrors {
  search: Error | null;
}

export interface UseWarranty {
  warranty: ComputedProperty<Warranty>;
  search: (params: WarrantySearchParams) => Promise<void>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UseWarrantyErrors>;
}
