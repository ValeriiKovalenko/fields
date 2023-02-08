import { Button as MuiButton } from "@mui/material";
export const Button = ({
  onClick,
  isActive,
}: {
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <MuiButton variant="contained" onClick={onClick}>
      {isActive ? "Reset" : "Start"}
    </MuiButton>
  );
};
