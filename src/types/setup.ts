export interface ClientInstance {
  get(url: string, params?: any, options?: any): Promise<any>;
}

export interface ClientConfig {
  apiUrl: string;
}

export interface Config extends ClientConfig {
  client?: ClientInstance;
}


