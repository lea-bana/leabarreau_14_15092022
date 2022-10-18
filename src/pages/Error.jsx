import React from "react";
import "../style/Error.css";

export default function Error() {
  return (
    <main aria-labelledby="page-title">
      <h2 tabIndex="0" id="page-title" className="error-msg">
        404 - Page not found
      </h2>
    </main>
  );
}
