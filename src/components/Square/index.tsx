import { Box } from "@mui/system";
import React from "react";

export const Square = ({
  n,
  isActive,
  onToggleCell,
}: {
  n: number;
  isActive: boolean;
  onToggleCell: (n: number) => void;
}) => {
  return (
    <Box
      onMouseOver={() => onToggleCell(n)}
      sx={{
        minWidth: "40px",
        maxWidth: "40px",
        minHeight: "40px",
        maxHeight: "40px",
        outline: "1px solid black",
        backgroundColor: isActive ? "blue" : "#fff",
      }}
    ></Box>
  );
};
