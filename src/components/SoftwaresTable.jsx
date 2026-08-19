import AllTables from "./AllTables.jsx";

export default function SoftwaresTable({ softwares }) {
  const columns = [
    { key: "hostname", label: "Hostname" },
    { key: "software_name", label: "Product" },
    { key: "software_version", label: "Version" },
    { key: "created_at", label: "Detected" },
  ];

  return <AllTables columns={columns} data={softwares} />;
}
