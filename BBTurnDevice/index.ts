/**
 * This is a simple company interface
 * @param companyName String
 * @param companyID String
 */

import Device from "../Device";

 export interface BBTurnDevice extends Device {
    companyLocation: string;
    companyPhone: string;
    companyCode: string;
    companyOwner?: string;
}

export default BBTurnDevice;