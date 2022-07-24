import ServiceProduct from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a product interface with Table Paramameters
 */
export interface ServiceProductTable extends ServiceProduct, DataControl {};

export default ServiceProductTable;