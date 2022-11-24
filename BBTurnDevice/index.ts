/**
 * This is a especific device from BBTurn interface
 */

import Device from "../Device";

export interface BBTurnDevice extends Device {
  companyID: string;
}

export default BBTurnDevice;