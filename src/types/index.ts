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
