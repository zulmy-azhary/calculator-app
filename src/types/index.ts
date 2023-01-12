export type Variant = "number" | "operator" | "decimal" | "delete" | "reset" | "compute";

export type EventDetails = {
  variant: Variant;
  data: string;
}

export type EventDispatch = {
  detail: EventDetails;
}