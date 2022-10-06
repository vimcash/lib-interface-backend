import CollabUser from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a simple company interface with Table Paramameters
 */
export interface CollabUserTable extends CollabUser, DataControl {};

export default CollabUserTable;