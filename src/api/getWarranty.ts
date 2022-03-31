import { Context, Warranties, WarrantySearchParams } from '../types';

export default async (
  { config, client }: Context,
  params: WarrantySearchParams
): Promise<Warranties> => {
  const { apiUrl } = config;
  const { products = [] } = params;
  const warranties = {};

  const responses = await Promise.all(products.map(product => client.get(
    apiUrl,
    {
      prod_sku: product.prodSku,
      prod_desc: product.prodDesc,
      prod_price: product.prodPrice,
    },
    {
      headers: {
        'Accept': 'application/json',
      },
      parseResponse: JSON.parse,
    }
  )));

  responses.forEach((data, index) => {
    if (
      data &&
      products[index].prodSku
    ) {
      warranties[products[index].prodSku] = data;
    }
  });

  return warranties;
}
