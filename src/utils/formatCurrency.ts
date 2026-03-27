const currencyFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export const formatCurrency = (value: number) => currencyFormatter.format(value)

