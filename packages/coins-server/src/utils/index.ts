export const getProcessUptime = () => Math.floor(process.uptime());

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
