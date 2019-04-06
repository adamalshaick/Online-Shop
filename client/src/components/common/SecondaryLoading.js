import React from "react";
import { MutedDots } from "./styles/StyledLoading";

export const SecondaryLoading = () => {
  return (
    <div className="entry">
      <MutedDots>...</MutedDots>
    </div>
  );
};

export default SecondaryLoading;
