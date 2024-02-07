import { Alert, AlertColor, Snackbar } from "@mui/material";

type Props = {
  open: boolean;
  message: string;
  severity: AlertColor
  handleClose: () => void;
};

export default function Message({ open, message, severity,handleClose }: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={600}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={severity} onClose={handleClose}>{message}</Alert>
    </Snackbar>
  );
}
