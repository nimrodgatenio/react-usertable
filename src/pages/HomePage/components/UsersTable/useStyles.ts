import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "15px",
  },
  tableContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addressCell: {
    maxWidth: 50,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export default useStyles;
