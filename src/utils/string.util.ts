export const formatToWon = (value: number) => new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" }).format(value);
