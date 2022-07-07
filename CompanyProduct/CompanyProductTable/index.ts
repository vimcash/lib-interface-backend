import CompanyProduct from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a product interface with Table Paramameters
 */
export interface CompanyProductTable extends CompanyProduct, DataControl {};

export default CompanyProductTable;