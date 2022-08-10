export const formatNumber = (value: number) => {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return formattedValue.replace(".00", "");
};
