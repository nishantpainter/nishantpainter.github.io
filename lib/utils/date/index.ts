export function format(input: Date) {
  let date, month, year;

  date = input.getDate();
  month = input.getMonth() + 1;
  year = input.getFullYear();

  date = date.toString().padStart(2, "0");

  month = month.toString().padStart(2, "0");

  return `${date}-${month}-${year}`;
}
