export const formatDate = input => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const inputWithNoRegionTime = input.split("T")[0];
  const arr = inputWithNoRegionTime.split("-");
  return `${months[arr[1] - 1]} ${arr[2]}, ${arr[0]}`;
};
