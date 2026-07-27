import AllTables from "./AllTables.jsx";

export default function HostTable({ hosts }) {
  const columns = [
    { key: "hostname", label: "Hostname" },
    { key: "ip_address", label: "IP" },
    { key: "cpu_model", label: "CPU" },
    { key: "ram_size", label: "Arbeitspeicher" },
    { key: "gpu_model", label: "Grafikkarte" },
    { key: "storage_size", label: "Speichergröße" },
    { key: "operating_system", label: "OS" },
    { key: "last_seen", label: "Letzter Log" },
    //{ key: "status", label: "Status" }, nice to have
  ];

  return <AllTables columns={columns} data={hosts} />;
}
