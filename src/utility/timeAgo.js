export const timeAgo = (date1, date2) => {
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;
  const millisecondsPerMonth = 30 * millisecondsPerDay;
  const millisecondsPerYear = 365 * millisecondsPerDay;

  const timeDifference = Math.abs(date1 - date2);

  if (timeDifference >= millisecondsPerYear) {
    const yearsAgo = Math.floor(timeDifference / millisecondsPerYear);
    return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
  } else if (timeDifference >= millisecondsPerMonth) {
    const monthsAgo = Math.floor(timeDifference / millisecondsPerMonth);
    return monthsAgo === 1 ? "1 month ago" : `${monthsAgo} months ago`;
  } else if (timeDifference >= millisecondsPerDay) {
    const daysAgo = Math.floor(timeDifference / millisecondsPerDay);
    return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
  } else if (timeDifference >= millisecondsPerHour) {
    const hoursAgo = Math.floor(timeDifference / millisecondsPerHour);
    return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
  } else if (timeDifference >= millisecondsPerMinute) {
    const minutesAgo = Math.floor(timeDifference / millisecondsPerMinute);
    return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
  } else {
    return "Just now";
  }
};
