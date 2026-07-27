import AllTables from "./AllTables.jsx";

export default function LogsTable({ logs }) {
  const BASE_COLUMNS = [
    { key: "TimeCreated", label: "Zeit" },
    { key: "Hostname", label: "Host" },
    { key: "EventID", label: "Event" },
    { key: "Level", label: "Level" },
    { key: "Message", label: "Nachricht" },
  ];

  const hasKeyword = logs.some((log) => log.Keyword);

  const columns = hasKeyword
    ? [...BASE_COLUMNS, { key: "Keyword", label: "Schlüsselwort" }]
    : BASE_COLUMNS;

  return <AllTables columns={columns} data={logs} />;
}
