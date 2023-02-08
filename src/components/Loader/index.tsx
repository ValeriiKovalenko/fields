import { CircularProgress, LinearProgress } from "@mui/material";

export const Loader = () => {
  return (
    <LinearProgress
      sx={{
        position: "absolute",
        width: "100%",
        top: "0",
        left: "0",
      }}
    />
  );
};
