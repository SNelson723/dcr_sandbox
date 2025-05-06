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
};

export const getTopHourlySubDepts = async (url: string, date: string, hour: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/subdepts",
    params: {
      date,
      hour
    }
  });
  return json;
};

export const getTopHourlyCats = async (url: string, date: string, hour: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/cat",
    params: {
      date,
      hour
    }
  });
  return json;
};

export const getTopHourlyTenders = async (url: string, date: string, hour: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    url: url + "hourlysales/tender",
    params: {
      date,
      hour
    }
  });
  return json;
};

export const getTopHourlyItems = async (url: string, date: string, hour: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/bottomtenitems",
    params: {
      date, hour
    }
  });
  return json;
};

export const getBottomHourlyItems = async (url: string, date: string, hour: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlySales/botomtenitems",
    params: {
      date,
      hour
    }
  });
  return json;
};