import { WarrantyProducts } from '../types';

export const getWarrantiesBySku = (products: WarrantyProducts, sku: string) => products ? products[sku] : [];

const warrantyGetters = {
  getWarrantiesBySku,
};

export default warrantyGetters;
