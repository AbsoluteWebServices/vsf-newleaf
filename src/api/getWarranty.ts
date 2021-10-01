import { Context, Warranties, WarrantySearchParams } from '../types';

export default async (
  { config, client }: Context,
  params: WarrantySearchParams
): Promise<Warranties> => {
  const { apiUrl } = config;
  const { products = [] } = params;
  const warranties = {};

  for (const product of products) {
    const url = new URL(apiUrl);

    url.searchParams.set('prod_sku', product.prodSku);
    url.searchParams.set('prod_desc', product.prodDesc);
    url.searchParams.set('prod_price', product.prodPrice);

    try {
      const response = await client.get(url.href);

      if (response.status !== 200) {
        throw response.data;
      }

      if (response.data) {
        warranties[product.prodSku] = response.data;
      }
    } catch (err: any) {
      throw err;
    }
  }

  return warranties;
}
