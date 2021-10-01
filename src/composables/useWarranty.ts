import { Context } from '@vue-storefront/core';
import { Warranties, WarrantySearchParams } from '../types';
import { useWarrantyFactory, UseWarrantyFactoryParams } from '../factories/useWarrantyFactory';

const factoryParams: UseWarrantyFactoryParams = {
  search: async (context: Context, params: WarrantySearchParams): Promise<Warranties> => {
    return context.$newleaf.api.getWarranty(params);
  },
};


export default useWarrantyFactory(factoryParams);
