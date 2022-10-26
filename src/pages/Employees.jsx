import Table from "../components/Table/Table.jsx";
import { useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { selectEmployee } from "../utils/selector.js";

/**
 * Employees
 * @returns {Reactnode}  jsx injected in DOM
 */

export default function Employees() {
  const datas = useSelector(selectEmployee);
  console.log(datas);
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
