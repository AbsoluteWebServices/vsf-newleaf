import { WarrantiesProducts } from '../types';

export const getWarrantiesBySku = (products: WarrantiesProducts, sku: string) => products ? products[sku] : [];

const warrantyGetters = {
  getWarrantiesBySku,
};

export default warrantyGetters;
