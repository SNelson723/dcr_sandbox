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
