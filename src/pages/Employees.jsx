import Table from "../components/Table/Table.jsx";
import { useEffect } from "react";

export default function Employees() {
  useEffect(() => {
    document.title = "HRnet | Employees";
  });
  return (
    <main className="employees-list">
      <h2>Employees list</h2>
      <Table />
    </main>
  );
}
