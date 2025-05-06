import axios from "axios";

export const getTables = async (url: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "tables/all",
  });

  return json;
};
