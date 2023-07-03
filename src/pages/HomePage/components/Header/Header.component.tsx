import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./useStyles";

import { useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  const handleGoBack = () => {
    navigate("/");
  };

  const isCurrentRouteHome = (): boolean => {
    return location.pathname === "/";
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {!isCurrentRouteHome() && (
          <IconButton
            color="inherit"
            onClick={handleGoBack}
            className={classes.backButton}
          >
            <ArrowBack />
          </IconButton>
        )}
        <Typography variant="h6" component="div" className={classes.title}>
          Welcome to Nimrod's User Table
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
