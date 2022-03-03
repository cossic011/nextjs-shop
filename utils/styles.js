import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    "& a ": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  bold: {},
  brand: {
    fontWeight: "bold",
    fontSize: "2rem",
  },
  grow: {
    flexGrow: "1",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  bolder: {
    fontWeight: "bold",
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
    "&:hover": {
      fontWeight: "bold",
    },
  },
  error: {
    color: "#f04040",
  },
  fullWidth: {
    width: "100%",
  },
});

export default useStyles;
