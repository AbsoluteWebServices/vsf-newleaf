import { Context } from '@absolute-web/vsf-core';
import { Warranties, WarrantySearchParams } from '../types';
import { useWarrantyFactory, UseWarrantyFactoryParams } from '../factories/useWarrantyFactory';

const factoryParams: UseWarrantyFactoryParams = {
  search: async (context: Context, params: WarrantySearchParams): Promise<Warranties> => {
    return context.$newleaf.getApi.getWarranty(params);
  },
};


export default useWarrantyFactory(factoryParams);
