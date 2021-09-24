import { ApiClientMethods, IntegrationContext } from '@vue-storefront/core';
import { ClientInstance, Config, NewleafApiMethods } from './types';

declare module '@vue-storefront/core' {
  export interface Context {
    $newleaf: IntegrationContext<ClientInstance, Config, ApiClientMethods<NewleafApiMethods>>;
  }
}
