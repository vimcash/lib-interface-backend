/**
 * This is a device interface
 */

import TelegramInfo from "../TelegramInfo";

export interface BinanceToken extends TelegramInfo {
  apiKey: string;
  apiToken: string;
}

export default BinanceToken;