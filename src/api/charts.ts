import axios from 'axios';

export const getSubSales = async (url: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    url: url + "nelson_sandbox/get_sub_sales"
  });
  return json;
};

export const getDateSales = async (url: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    url: url + "nelson_sandbox/get_date_sales"
  });
  return json;
};