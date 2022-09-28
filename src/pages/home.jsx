import Form from "../components/Form.jsx";
import "../style/Home.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "HRnet | Home";
  });

  return (
    <main className="add-employee">
      <section className="add-employee-content">
        <h1>Add an employee</h1>
        <Form />
      </section>
    </main>
  );
}
