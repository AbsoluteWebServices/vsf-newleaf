import { Context, Warranty, WarrantySearchParams } from '../types';

export default async (
  { config, client }: Context,
  params: WarrantySearchParams
): Promise<Warranty> => {
  const { apiUrl } = config;
  const { prodSku, prodDesc, prodPrice } = params;
  const url = new URL(apiUrl);

  url.searchParams.set('prod_sku', prodSku);
  url.searchParams.set('prod_desc', prodDesc);
  url.searchParams.set('prod_price', prodPrice);

  try {
    const response = await client.get(url.href);

    if (response.status !== 200) {
      throw response.data;
    }

    return response.data || {};
  } catch (err: any) {
    throw err;
  }
}
