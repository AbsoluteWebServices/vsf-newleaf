import { Ref, computed } from 'vue-demi';
import {
  configureFactoryParams,
  Context,
  FactoryParams,
  Logger,
  sharedRef,
} from '@vue-storefront/core';
import {
  UseWarranty,
  UseWarrantyErrors,
  Warranties,
  WarrantySearchParams,
  WarrantiesProducts
} from '../types';

export interface UseWarrantyFactoryParams extends FactoryParams{
  search: (context: Context, params: WarrantySearchParams) => Promise<Warranties>;
}

export function useWarrantyFactory(
  factoryParams: UseWarrantyFactoryParams,
) {
  return function useWarranty(ssrKey = ' useWarranty'): UseWarranty {
    const warranties: Ref<Warranties> =
      sharedRef<Warranties>({}, `useWarranty-warranty-${ssrKey}`);
    const warrantiesProducts: Ref<WarrantiesProducts> =
      sharedRef<WarrantiesProducts>({}, `${ssrKey}-warrantiesProducts`);
    const loading: Ref<boolean> = sharedRef<boolean>(false, `useWarranty-loading-${ssrKey}`);
    const error: Ref<UseWarrantyErrors> = sharedRef({
      search: null,
    }, `useWarranty-error-${ssrKey}`);
    // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
    const _factoryParams = configureFactoryParams(factoryParams);

    const search = async (params: WarrantySearchParams) => {
      Logger.debug(`useWarranty/${ssrKey}/search`);

      try {
        loading.value = true;
        warranties.value = await _factoryParams.search(params);
        error.value.search = null;
      } catch (err: any) {
        error.value.search = err;
        Logger.error(`useWarranty/${ssrKey}/search`, err);
      } finally {
        loading.value = false;
      }
    };

    const setWarrantiesProducts = (value: WarrantiesProducts) =>
      (warrantiesProducts.value = value);

    return {
      warranties: computed(() => warranties.value),
      warrantiesProducts: computed(() => warrantiesProducts.value),
      loading: computed(() => loading.value),
      error: computed(() => error.value),
      search,
      setWarrantiesProducts,
    };
  };
}
