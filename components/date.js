import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const namedYears = {
    2023: "The Year Lucia Was Born",
  };

  const date = parseISO(dateString);
  const year = namedYears[date.getFullYear()] || date.getFullYear();
  return (
    <time dateTime={dateString}>
      {format(date, "MMMM do, ")}
      {year}
    </time>
  );
}
