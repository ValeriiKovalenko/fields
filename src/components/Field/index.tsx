import { Paper, Stack } from "@mui/material";
import React from "react";
import { IMode } from "../../api";
import { Square } from "../Square";

type FieldProps = {
  activeMode?: IMode;
  activeCells: Array<number>;
  onToggleCell: (n: number) => void;
};

export const Field = ({
  activeMode,
  activeCells,
  onToggleCell,
}: FieldProps) => {
  if (!activeMode) {
    return null;
  }
  const squares = Array.from({ length: activeMode.field ** 2 }, (_, index) => {
    const isActive = activeCells.includes(index + 1);
    return (
      <Square
        key={index}
        n={index + 1}
        isActive={isActive}
        onToggleCell={onToggleCell}
      />
    );
  });

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      sx={{
        maxWidth: `${40 * activeMode.field}px`,
        outline: "1px solid black",
      }}
    >
      {squares}
    </Stack>
  );
};
