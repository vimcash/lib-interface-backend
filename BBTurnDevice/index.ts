/**
 * This is a especific device from BBTurn interface
 */

import Device from "../Device";
import { DeviceStatus } from "../Core/Dependencies/Enums/DeviceStatus";

export interface BBTurnDevice extends Device {
  deviceStatus?: DeviceStatus;
}

export default BBTurnDevice;