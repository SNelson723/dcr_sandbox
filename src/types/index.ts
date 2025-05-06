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
  f65: string;
  f64: string;
  f03: string;
  f238: string;
  f254: string;
  hour: string;
  f1056: string;
}

export type HourlySubDept = {
  f65: string;
  f64: string;
  f04: string;
  f238: string;
  f254: string;
  hour: string;
  f1056: string;
}

export type HourlyCat = {
  f1023: string;
  f17: string;
  f65: string;
  f64: string;
}

export type HourlyTender = {
  f1041: string;
  f1063: string;
  f65: string;
  qty: string;
}

export type HourlyItem = {
  f1041: string;
  f64: string;
  f65: string;
}