export type Field = {
  name: string;
  alias: string;
};

export type Table = {
  name: string;
  alias: string;
};

export type TableInfo = {
  alias: string;
  table_name: string;
  field_name: string;
  field_alias: string;
  selectable: string;
  searchable: string;
  sortable: string;
  datatype: string;
  autosearch: string;
  mandatory: string;
  shortname: string;
};

export type HourlyDept = {
  f254: string;
  f1056: string;
  f64: string;
  f65: string;
  f67: string;
  f238: string;
  f03: string;
  f1034: string;
};

export type HourlySubDept = {
  f254: string;
  f1056: string;
  f64: string;
  f65: string;
  f67: string;
  f1022: string;
  f04: string;
};

export type HourlyCat = {
  f1023: string;
  f17: string;
  f65: string;
  f64: string;
};

export type HourlyTender = {
  f1041: string;
  f1063: string;
  f65: string;
  qty: string;
};

export type HourlyItem = {
  f01: string;
  f1041: string;
  f64: string;
  f65: string;
  f254: string;
};

export type DeptItem = {
  f03: string;
  f04: string;
  f1041: string;
  f254: string;
  f65: string;
  f64: string;
};

export type JsonError = {
  message: string;
};

export type Answer = {
  letter: string;
  answer: Field;
};

export type DateSale = {
  sale_date: string;
  sales: number;
  quantity: number;
};

export type SubSale = {
  sub_department_description: string;
  sales: number;
  quantity: number;
};

export type ChartData = {
  month: string;
  avgTemp: number;
  iceCreamSales: number;
};

export type Handlers = {
  copy: () => Promise<void> | void;
  exportVisual: () => Promise<void> | void;
  reset: () => Promise<void> | void;
  mode: (mode: string) => Promise<void> | void;
  exportAll: () => Promise<void> | void;
  test: () => Promise<void> | void;
};
export type ContextEvent = React.MouseEvent<
  HTMLTableRowElement | HTMLDivElement
>;
export type Option = {
  label: string;
  key: keyof Handlers;
  children?: Option[];
  value?: string;
};
