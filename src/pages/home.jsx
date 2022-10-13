import Form from "../components/Form.jsx";
import "../style/Home.css";
import React, { useEffect } from "react";

/**
 * Home
 * @returns {Reactnode}  jsx injected in DOM
 */

export default function Home() {
  useEffect(() => {
    document.title = "HRnet | Home";

    // FILLING THE ADDRESS BLOCK WITH THE ADDRESS ITEMS
    const addressContainer = document.getElementById("addressContainer");

    const addressItems = [...document.getElementsByClassName("address")];

    addressItems.map((item) => {
      return <h3>Address</h3> && addressContainer.append(item);
    });
  });

  return (
    <main className="add-employee">
      <section className="add-employee-content">
        <h2>Add an employee</h2>
        <Form />
      </section>
    </main>
  );
}
