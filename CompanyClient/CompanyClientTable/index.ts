import CompanyClient from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a especific device from BBTurn interface with Table Paramameters
 */
export interface CompanyClientTable extends CompanyClient, DataControl {};

export default CompanyClientTable;