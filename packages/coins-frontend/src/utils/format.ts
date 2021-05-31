import { formatCurrency as cryptoformat } from "@coingecko/cryptoformat";

const DEFAULT_ISO_CODE = "EUR";
const DEFAULT_LOCALE = "en";

export const formatCurrency = (value: number) => {
  return cryptoformat(value, DEFAULT_ISO_CODE, DEFAULT_LOCALE, false, {
    significantFigures: 4,
  });
};
