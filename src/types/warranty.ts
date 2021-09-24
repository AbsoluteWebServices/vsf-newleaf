export interface WarrantyProperty {
  [key: string|number]: string
}

export interface WarrantySearchParams {
  prodSku: string,
  prodDesc: string,
  prodPrice: string
}

export interface Warranty {
  warranty_description?: WarrantyProperty,
  warranty_sku?: WarrantyProperty,
  warranty_price?: WarrantyProperty,
  warranty_count?: number
}
