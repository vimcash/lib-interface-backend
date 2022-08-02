import TelegramInfo from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a simple Device interface with Table Paramameters
 */
export interface TelegramInfoTable extends TelegramInfo, DataControl {};

export default TelegramInfoTable;