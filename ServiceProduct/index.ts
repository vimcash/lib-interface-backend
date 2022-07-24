/**
 * This is a product interface
 */
import CompanyProduct from "../CompanyProduct";

export interface ServiceProduct extends CompanyProduct{
  serviceTime: Number; //Seconds
}

export default ServiceProduct;