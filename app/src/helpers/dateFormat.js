export default function dateFormat(input) {
  let date = new Date(input);
  const month = [
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
    "December"
  ];
  let monthIndex = date.getMonth();
  let dateNum = date.getDate();

  return `${month[monthIndex]} ${dateNum}`;
}
