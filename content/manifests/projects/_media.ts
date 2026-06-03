import type { MediaRef } from "../_schema/types";

export const remote = (url: string): MediaRef => ({ kind: "remote", url });
