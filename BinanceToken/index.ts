/**
 * This is a device interface
 */

import TelegramInfo from "../TelegramInfo";

export interface BinanceToken extends TelegramInfo {
  apiKey: string;
  apiSecret: string;
}

export default BinanceToken;