import axios from "axios";

export const getTopHourlyDepts = async (
  url: string,
  date: string,
  hour: string
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/depts",
    params: {
      date,
      hour,
    },
  });
  return json;
};

export const getTopHourlySubDepts = async (
  url: string,
  date: string,
  hour: string
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/subdepts",
    params: {
      date,
      hour,
    },
  });
  return json;
};

export const getTopHourlyCats = async (
  url: string,
  date: string,
  hour: string
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/cat",
    params: {
      date,
      hour,
    },
  });
  return json;
};

export const getTopHourlyTenders = async (
  url: string,
  date: string,
  hour: string
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/tender",
    params: {
      date,
      hour,
    },
  });
  return json;
};

export const getTopHourlyItems = async (
  url: string,
  date: string,
  hour: string
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/toptenitems",
    params: {
      date,
      hour,
    },
  });
  return json;
};

export const getBottomHourlyItems = async (
  url: string,
  date: string,
  hour: string
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlySales/bottomtenitems",
    params: {
      date,
      hour,
    },
  });
  return json;
};

export const getDeptItems = async (
  url: string,
  date: string,
  hour: string,
  id: string
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/deptitems",
    params: {
      date,
      hour,
      id,
    },
  });
  return json;
};

export const getSubDeptItems = async (
  url: string,
  date: string,
  hour: string,
  id: string
) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "hourlysales/subdeptitems",
    params: {
      date,
      hour,
      id,
    },
  });
  return json;
};
