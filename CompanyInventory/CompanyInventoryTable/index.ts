import Inventory from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a Variety interface with Table Paramameters
 */
export interface InventoryTable extends Inventory, DataControl {};

export default InventoryTable;