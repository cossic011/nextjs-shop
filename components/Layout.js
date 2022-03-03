import { createTheme } from "@mui/system";
import { ThemeProvider } from "@mui/styles";
import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
  Badge,
  TextField,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import React, { useContext, useState } from "react";
import useStyles from "../utils/styles";
import { Store } from "../utils/store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
export default function Layout({ children, title, description }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState();
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("cartItems");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>{title ? `${title} - Buyest` : "Buyest"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar color="secondary" position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link color="secondary">
              <Typography className={classes.brand}> βuyest</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div className="flex">
            <NextLink href="/cart" passHref>
              <Link
                color="secondary"
                className={classes.bold}
                style={{ fontSize: "20px" }}
              >
                {cart.cartItems.length > 0 ? (
                  <Badge color="warning" badgeContent={cart.cartItems.length}>
                    Cart
                  </Badge>
                ) : (
                  "Cart"
                )}
              </Link>
            </NextLink>
            {userInfo ? (
              <>
                <Link
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={loginClickHandler}
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  className={classes.navbarButton}
                >
                  {userInfo.name}
                </Link>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={loginMenuCloseHandler}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                  <MenuItem onClick={loginMenuCloseHandler}>
                    My account
                  </MenuItem>
                  <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <NextLink href="/login" passHref>
                <Link
                  color="secondary"
                  className={classes.bold}
                  style={{ fontSize: "20px" }}
                >
                  Login
                </Link>
              </NextLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography className={classes.footer}>
          &copy; All Rights Reserved by Buyest. Designed And Developed by{" "}
          <NextLink href="#" passHref>
            <Link color="secondary">Mirko Cosic</Link>
          </NextLink>
        </Typography>
      </footer>
    </>
  );
}
