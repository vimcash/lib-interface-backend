/**
 * This is a especific device from BBTurn interface
 */

import Device from "../Device";

 export interface BBTurnDevice extends Device {
    companyLocation: string;
    companyPhone: string;
    companyCode: string;
    companyOwner?: string;
}

export default BBTurnDevice;