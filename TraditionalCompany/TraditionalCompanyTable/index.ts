import TraditionalCompany from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a tradicional company interface with Table Paramameters
 */
export interface TraditionalCompanyTable extends TraditionalCompany, DataControl {};

export default TraditionalCompanyTable;