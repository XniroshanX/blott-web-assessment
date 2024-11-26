import dayjs from "dayjs";

export const getDateByTimestamp = (timestamp: string) => {
  return dayjs(timestamp).format("DD-MMMM-YYYY");
};
