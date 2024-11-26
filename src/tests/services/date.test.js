import { getDateByTimestamp } from "../../services/date";

describe("Date", () => {
  const correctTimestamp = 1701108018;
  it("should format the date when give correct timestamp", () => {
    const date = getDateByTimestamp(correctTimestamp);
    expect(date).toBe("20-January-1970");
  });
});
