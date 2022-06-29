import TraditionalUser from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a simple User interface with Table Paramameters
 */
export interface TraditionalUserTable extends TraditionalUser, DataControl {};

export default TraditionalUserTable;