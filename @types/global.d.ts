import { Connection } from "@/types/connection";

declare global {
  interface Navigator {
    readonly connection: Connection;
    readonly mozConnection: Connection;
    readonly webkitConnection: Connection;
  }
}
