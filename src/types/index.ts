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