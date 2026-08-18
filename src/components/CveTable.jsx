import AllTables from "./AllTables.jsx";

export default function CveTable({ cves }) {
  const columns = [
    { key: "cve_id", label: "CVE-ID" },
    { key: "product", label: "Product" },
    { key: "description", label: "Description" },
    { key: "published_at", label: "Published at" },
  ];

  return <AllTables columns={columns} data={cves} />;
}
