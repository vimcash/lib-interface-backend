/**
 * This is a product interface
 */
import Product from "../Product"

export interface ServiceProduct extends Product{
  serviceTime: Number; //Seconds
}

export default ServiceProduct;