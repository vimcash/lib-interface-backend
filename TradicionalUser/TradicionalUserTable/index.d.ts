import TradicionalUser from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a simple User interface with Table Paramameters
 */
export interface TradicionalUserTable extends TradicionalUser, DataControl {
}
export default TradicionalUserTable;
