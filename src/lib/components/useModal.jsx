// CUSTOM MODAL HOOK
import { useState } from "react";

export default function useModal() {
  // modal's state
  const [isOpen, setIsOpen] = useState(false);

  // close modal when open
  function toggle() {
    setIsOpen(!isOpen);
  }

  // close modal by pressing escape key when keyboard navigation
  function escToClose(e) {
    if (e.key === "Escape") {
      toggle();
    }
  }

  return {
    isOpen,
    toggle,
    escToClose,
  };
}
