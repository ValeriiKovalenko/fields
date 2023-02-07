import { Stack, Typography } from "@mui/material";
import { IMode, IModeName } from "../../api";

type TableProps = {
  activeCells?: number[];
  activeMode?: IMode;
};

export const Table = ({ activeCells, activeMode }: TableProps) => {
  if (!activeMode || !activeCells) {
    return null;
  }
  const coordinates = activeCells.map((cell) => ({
    row: Math.ceil(cell / activeMode.field),
    column:
      cell % activeMode.field === 0
        ? activeMode.field
        : cell % activeMode.field,
  }));
  console.log(coordinates);

  return (
    <Stack direction="column" maxHeight={500} overflow="scroll">
      <Typography>Hover squares</Typography>
      {coordinates.length && (
        <Stack direction="column">
          {coordinates.map((n) => {
            return (
              <Typography>
                Row: {n.row} _ Column: {n.column}
              </Typography>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};
