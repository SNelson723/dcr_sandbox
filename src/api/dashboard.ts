import axios from "axios";

export const getDashboard = async (
  url: string,
  user_arn: string,
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "embed-url",
    params: {
      user_arn: user_arn,
    },
  });
  return json;
};
