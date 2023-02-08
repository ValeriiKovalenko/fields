import { Box, Stack, Typography } from "@mui/material";
import { IMode } from "../../api";

type TableProps = {
  activeCells: number[];
  activeMode: IMode;
};

export const Table = ({ activeCells, activeMode }: TableProps) => {
  const coordinates = activeCells.map((cell) => ({
    row: Math.ceil(cell / activeMode.field),
    column:
      cell % activeMode.field === 0
        ? activeMode.field
        : cell % activeMode.field,
  }));

  return (
    <Stack direction="column" sx={{ maxHeight: "700px" }}>
      <Typography variant="h4" gutterBottom fontWeight={500}>
        Hover squares
      </Typography>

      <Stack direction="column" spacing={1} overflow="scroll">
        {coordinates.map((n) => {
          return (
            <Box
              key={`table-${n.row}-${n.column}`}
              sx={{
                p: 2,
                backgroundColor: "rgb(250,247,220)",
                borderRadius: "4px",
                border: "solid 1px rgb(249,237,204)",
              }}
            >
              <Typography>
                row {n.row} col {n.column}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};
