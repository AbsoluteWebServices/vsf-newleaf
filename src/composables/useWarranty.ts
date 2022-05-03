import { ComposableFunctionArgs, Context } from '@absolute-web/vsf-core';
import { Warranties, WarrantySearchParams } from '../types';
import { useWarrantyFactory, UseWarrantyFactoryParams } from '../factories/useWarrantyFactory';

const factoryParams: UseWarrantyFactoryParams = {
  search: async (context: Context, params: ComposableFunctionArgs<WarrantySearchParams>): Promise<Warranties> => {
    const {
      signal,
      ...searchParams
    } = {
      ...params
    };
    return context.$newleaf.getApi.getWarranty(searchParams, undefined, signal);
  },
};


export default useWarrantyFactory(factoryParams);
