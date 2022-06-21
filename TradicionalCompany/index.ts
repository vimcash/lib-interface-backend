/**
 * This is a simple company interface
 * @param companyName String
 * @param companyID String
 */

import SimpleCompany from "../SimpleCompany";

 export interface TradicionalCompany extends SimpleCompany {
    companyLocation: string;
    companyPhone: string;
    companyCode: string;
    companyOwner?: string;
}

export default TradicionalCompany;