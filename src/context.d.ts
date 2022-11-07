import { ApiClientMethods, IntegrationContext } from '@absolute-web/vsf-core';
import { ClientInstance, Config, NewleafApiMethods } from './types';

declare module '@absolute-web/vsf-core' {
  export interface Context {
    $newleaf: IntegrationContext<ClientInstance, Config, ApiClientMethods<{}>, ApiClientMethods<NewleafApiMethods>>;
  }
}
