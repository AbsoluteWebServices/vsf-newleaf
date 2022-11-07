import { $fetch } from 'ohmyfetch';
import { apiClientFactory } from '@absolute-web/vsf-core';
import * as getApi from './api';
import { ClientInstance, Config } from './types';

const onCreate = (settings: Config): { config: Config; client: ClientInstance } => {
  const config = {
    ...settings,
  } as unknown as Config;

  if (settings.client) {
    return {
      client: settings.client,
      config,
    };
  }

  const client = {
    async get(url: string, params?: any, options?: any) {
      return $fetch(url, {
        method: 'GET',
        ...options,
        params,
      });
    }
  };

  return {
    client,
    config
  }
}

const { createApiClient } = apiClientFactory({
  onCreate,
  api: {},
  getApi
});

export {
  createApiClient
};
