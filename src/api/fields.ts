import axios from "axios";

export const getFields = async (url: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "fields/distinct",
  });
  return json;
};
