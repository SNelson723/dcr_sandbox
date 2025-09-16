import axios from "axios";

export const getPriceOpt = async (
  file: File,
  storeids = "111",
  userid = 1,
  startdate = "8/1/2025",
  enddate = "8/2/2025"
) => {
  const formData = new FormData();
  formData.append("file", file);

  const json = await axios({
    method: "POST",
    url: "http://localhost:5005/Prod/marketing/upload_upcs_price_optimizer",
    data: formData,
    params: { storeids, userid, startdate, enddate },
  });

  return json;
};

export const getDailySales = async (
  file: File,
  storeids = "111,36,45,35,104,22,13",
  userid = 1,
  startdate = "7/1/2025",
  enddate = "9/7/2025"
) => {
  const formData = new FormData();
  formData.append("file", file);
  const json = await axios({
    method: "POST",
    url: "http://localhost:5005/Prod/marketing/upload_upcs_daily_sales",
    data: formData,
    params: { storeids, userid, startdate, enddate },
  });
  return json;
};
