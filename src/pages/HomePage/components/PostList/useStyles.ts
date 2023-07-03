import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

declare module "@mui/material/styles" {
  interface DefaultTheme {
    spacing: number;
  }
}

export const theme = createTheme({
  spacing: 8, // Define your desired spacing value here
});

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: 16, // Specify the desired spacing value directly
  },
  card: {
    marginBottom: 16,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex",
  },
  deleteButton: {
    marginLeft: 16,
  },
}));
