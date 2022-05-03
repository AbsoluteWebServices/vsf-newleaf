import { ComposableFunctionArgs, ComputedProperty } from '@absolute-web/vsf-core';
import { Warranties, WarrantySearchParams, WarrantyProducts } from './warranty';

export interface UseWarrantyErrors {
  search: Error | null;
}

export interface UseWarranty {
  warranties: ComputedProperty<Warranties>;
  warrantyProducts: ComputedProperty<WarrantyProducts>;
  search: (params: ComposableFunctionArgs<WarrantySearchParams>) => Promise<void>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UseWarrantyErrors>;
  setWarrantyProducts(value: WarrantyProducts): void;
}
