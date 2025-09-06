type ConnectionType =
  | "bluetooth"
  | "cellular"
  | "ethernet"
  | "mixed"
  | "none"
  | "other"
  | "unknown"
  | "wifi"
  | "wimax";

type EffectiveType = "slow-2g" | "2g" | "3g" | "4g";

export interface Connection extends EventTarget {
  readonly rtt: number;
  readonly downlink: number;
  readonly downlinkMax: number;
  readonly type: ConnectionType;
  readonly effectiveType: EffectiveType;
  readonly saveData: boolean;
}
