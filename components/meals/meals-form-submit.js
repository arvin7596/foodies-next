"use client";

import { useFormStatus } from "react-dom";

function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={true}>
      {pending ? "Submitting... " : "Share Meal"}
    </button>
  );
}

export default MealsFormSubmit;
