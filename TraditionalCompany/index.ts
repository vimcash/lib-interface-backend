/**
 * This is a tradicional company interface
 */

import SimpleCompany from "../SimpleCompany";

 export interface TraditionalCompany extends SimpleCompany {
    companyLocation: string;
    companyPhone: string;
    companyCode: string;
    companyOwner?: string;
}

export default TraditionalCompany;