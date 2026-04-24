import AllTables from "./AllTables.jsx";

export default function HostTable({ hosts }) {
  const columns = [
    { key: "Hostname", label: "Hostname" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
    { key: "lastOnline", label: "Last Online" },
    { key: "cpu", label: "CPU" },
  ];

  return <AllTables columns={columns} data={hosts} />;
}
