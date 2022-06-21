import SimpleUser from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";

export interface SimpleUserTable extends SimpleUser, DataControl {};

export default SimpleUserTable;