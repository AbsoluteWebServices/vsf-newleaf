import { ComputedProperty } from '@vue-storefront/core';
import { Warranties, WarrantySearchParams, WarrantiesProducts } from './warranty';

export interface UseWarrantyErrors {
  search: Error | null;
}

export interface UseWarranty {
  warranties: ComputedProperty<Warranties>;
  warrantiesProducts: ComputedProperty<WarrantiesProducts>;
  search: (params: WarrantySearchParams) => Promise<void>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UseWarrantyErrors>;
  setWarrantiesProducts(value: WarrantiesProducts): void;
}
