import Table from "../components/Table/Table.jsx";
import { useEffect } from "react";

export default function Employees() {
  useEffect(() => {
    document.title = "HRnet | Employees";
  });
  return (
    <main className="employees-list">
      <h1>Employees list</h1>
      <Table />
    </main>
  );
}
