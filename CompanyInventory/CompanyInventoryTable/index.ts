import CompanyInventory from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a Variety interface with Table Paramameters
 */
export interface CompanyInventoryTable extends CompanyInventory, DataControl {};

export default CompanyInventoryTable;