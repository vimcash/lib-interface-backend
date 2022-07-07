/**
 * This is a inventory interface
 */
import Inventory from "../Inventory";
export interface CompanyInventory extends Inventory {
  companyID: string;
}

export default CompanyInventory;