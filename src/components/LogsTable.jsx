import AllTables from "./AllTables.jsx";

export default function LogsTable({ logs }) {
  const columns = [
    { key: "TimeCreated", label: "Zeit" },
    { key: "Hostname",    label: "Host" },
    { key: "EventID",     label: "Event ID" },
    { key: "Level",       label: "Level" },
    { key: "Message",     label: "Nachricht" },
  ];

  return <AllTables columns={columns} data={logs} />;
}
