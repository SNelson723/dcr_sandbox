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
}

export const colors: string[] = [
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-yellow-500",
    "bg-orange-500",
  ];