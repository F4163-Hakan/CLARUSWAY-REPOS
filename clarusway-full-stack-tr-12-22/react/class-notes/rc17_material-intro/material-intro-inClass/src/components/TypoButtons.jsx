import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    alignItems: "center",
  }}
>
  <Button variant="text">Text</Button>
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
  <Button variant="outlined" startIcon={<DeleteIcon />}>
    Delete
  </Button>
  <Button variant="contained" endIcon={<SendIcon />}>
    Send
  </Button>
</Box>;

