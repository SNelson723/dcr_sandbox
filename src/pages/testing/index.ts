import { Option } from "../../types";

export const upcOptions: Option[] = [
  { label: "Copy UPC", key: "copy" },
  { label: "Export this visual", key: "exportVisual" },
];

const modes: Option[] = [
  { label: "Sales", key: "mode", value: "sales" },
  { label: "Quantity", key: "mode", value: "quantity" },
];

export const chartOptions: Option[] = [
  { label: "Reset Date", key: "reset" },
  { label: "Select Mode", key: "test", children: [...modes] },
  { label: "Export All Data", key: "exportAll" },
];
