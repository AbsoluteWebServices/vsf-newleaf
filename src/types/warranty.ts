export interface WarrantyProperty {
  [key: string|number]: string
}

export interface Product {
  prodSku: string,
  prodDesc: string,
  prodPrice: string
}

export interface WarrantySearchParams {
  products: Product[]
}

export interface Warranty {
  warranty_description?: WarrantyProperty,
  warranty_sku?: WarrantyProperty,
  warranty_price?: WarrantyProperty,
  warranty_count?: number
}

export interface Warranties {
  [key: string]: Warranty
}
