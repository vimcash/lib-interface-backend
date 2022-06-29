/**
 * This is a simple company interface
 */
import TraditionalUser from "../TraditionalUser"

export interface CompanyUser extends TraditionalUser{
    companyID: string;
}

export default CompanyUser;