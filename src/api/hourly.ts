import axios from 'axios';

export const getTopHourlyDepts = async (url: string, date: string, hour: string) => {
  const json = await axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url: url + "hourlysales/depts",
    params: {
      date,
      hour
    }
  });
  return json;
}