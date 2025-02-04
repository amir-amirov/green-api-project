export const formattedTime = (time: any) => {
  const date = new Date(time);
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Almaty",
  });
};
