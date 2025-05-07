import { HourlyItem } from "../types";

export const formatCurrency = (
  value: string,
  locale: string = "en-US",
  currency: string = "USD"
): string => {
  const numberValue = parseFloat(value);
  if (isNaN(numberValue)) {
    throw new Error("Invalid number");
  }
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(numberValue);
};

export const colors: string[] = [
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-yellow-500",
  "bg-orange-500",
];

export const avg = (arr: HourlyItem[]) => {
  const total =
    arr.reduce((acc, item) => acc + parseFloat(item.f65), 0) / arr.length;
  return total.toString();
};
export const median = (arr: HourlyItem[]) => {
  const sorted = arr.map((item) => parseFloat(item.f65)).sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const result =
    sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  return result.toString();
};

export const totalSales = (arr: HourlyItem[]) => {
  const result = arr.reduce((acc, item) => acc + parseFloat(item.f65), 0);
  return result.toString();
};

export const totalQty = (arr: HourlyItem[]) => {
  const result = arr.reduce((acc, item) => acc + parseInt(item.f64), 0);
  return result.toString();
};
