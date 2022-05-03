import { Ref, computed } from 'vue-demi';
import {
  ComposableFunctionArgs,
  configureFactoryParams,
  Context,
  FactoryParams,
  Logger,
  sharedRef,
} from '@absolute-web/vsf-core';
import {
  UseWarranty,
  UseWarrantyErrors,
  Warranties,
  WarrantySearchParams,
  WarrantyProducts
} from '../types';

export interface UseWarrantyFactoryParams extends FactoryParams{
  search: (context: Context, params: ComposableFunctionArgs<WarrantySearchParams>) => Promise<Warranties>;
}

export function useWarrantyFactory(
  factoryParams: UseWarrantyFactoryParams,
) {
  return function useWarranty(ssrKey = ' useWarranty'): UseWarranty {
    const warranties: Ref<Warranties> =
      sharedRef<Warranties>({}, `useWarranty-warranty-${ssrKey}`);
    const warrantyProducts: Ref<WarrantyProducts> =
      sharedRef<WarrantyProducts>({}, `useWarranty-warrantyProducts-${ssrKey}`);
    const loading: Ref<boolean> = sharedRef<boolean>(false, `useWarranty-loading-${ssrKey}`);
    const error: Ref<UseWarrantyErrors> = sharedRef({
      search: null,
    }, `useWarranty-error-${ssrKey}`);
    // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
    const _factoryParams = configureFactoryParams(factoryParams);

    const search = async (params: ComposableFunctionArgs<WarrantySearchParams>) => {
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

    const setWarrantyProducts = (value: WarrantyProducts) =>
      (warrantyProducts.value = value);

    return {
      warranties: computed(() => warranties.value),
      warrantyProducts: computed(() => warrantyProducts.value),
      loading: computed(() => loading.value),
      error: computed(() => error.value),
      search,
      setWarrantyProducts,
    };
  };
}
