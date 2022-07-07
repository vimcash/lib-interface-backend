/**
 * This is a product interface
 */
import Product from "../Product"

export interface CompanyProduct extends Product{
  companyID: string;
}

export default CompanyProduct;