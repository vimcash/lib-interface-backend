import CompanyUser from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a simple company interface with Table Paramameters
 */
export interface CompanyUserTable extends CompanyUser, DataControl {};

export default CompanyUserTable;