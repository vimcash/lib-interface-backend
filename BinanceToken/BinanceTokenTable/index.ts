import BinanceToken from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a simple Device interface with Table Paramameters
 */
export interface BinanceTokenTable extends BinanceToken, DataControl {};
export default BinanceTokenTable;