import AllTables from "./AllTables.jsx";

export default function LogsTable({ logs }) {
  const columns = [
    { key: "TimeCreated", label: "Zeit" },
    { key: "EventID", label: "Event ID" },
    { key: "Level", label: "Level" },
    { key: "Source", label: "Quelle" },
    { key: "Message", label: "Nachricht" },
  ];

  return <AllTables columns={columns} data={logs} />;
}
