import AllTables from "./AllTables.jsx";

export default function UserTable({ users }) {
  const columns = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
    { key: "lastLogin", label: "Last Login" },
    { key: "time", label: "Time" }
  ];

  return <AllTables columns={columns} data={users} />;
}
