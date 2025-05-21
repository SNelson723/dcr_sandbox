import axios from "axios";

export const getDashboard = async (
  url: string,
  user_arn: string,
  dashboard_id: string
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "embed-url",
    params: {
      user_arn: user_arn,
      dashboard_id: dashboard_id,
    },
  });
  return json;
};
