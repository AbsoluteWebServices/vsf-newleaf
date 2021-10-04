import { Context, Warranties, WarrantySearchParams } from '../types';

export default async (
  { config, client }: Context,
  params: WarrantySearchParams
): Promise<Warranties> => {
  const { apiUrl } = config;
  const { products = [] } = params;
  const warranties = {};
  const requestPromises = [];

  for (const product of products) {
    const url = new URL(apiUrl);

    url.searchParams.set('prod_sku', product.prodSku);
    url.searchParams.set('prod_desc', product.prodDesc);
    url.searchParams.set('prod_price', product.prodPrice);

    requestPromises.push(client.get(url.href));
  }

  const responses = await Promise.all(requestPromises);

  responses.forEach((response, index) => {
    if (
      response.status === 200 &&
      response.data &&
      products[index].prodSku
    ) {
      warranties[products[index].prodSku] = response.data;
    }
  });

  return warranties;
}
