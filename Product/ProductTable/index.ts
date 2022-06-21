import Product from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";

export interface ProductTable extends Product, DataControl {};

export default ProductTable;