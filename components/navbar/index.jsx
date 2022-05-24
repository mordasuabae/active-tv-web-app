import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { USER_CONTEXT } from "../../context/MainContext";

const Navbar = () => {
  const pages = ["Home", "Shows", "Greenlight", "Merch", "Learn More"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const UserContext = React.useContext(USER_CONTEXT);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [logged, setLogged] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#111",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {/* <img
              src="https://www.activetvonline.co.za/static/media/logo.718a6dab.png"
              alt=""
              height="75px"
            /> */}
            <Box sx={{
              height:'75px',
              width:'100%',
              backgroundImage:'url("https://www.activetvonline.co.za/static/media/logo.718a6dab.png")',
              backgroundSize:'cover',
              backgroundPosition:'center'
            }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography className={"active-tv-font"} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              // justifyContent: "space-beterrn",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <a>
                <Button
                  // className={anchorElNav ? "active" : "active"}
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#eee",
                    margin: "0 8px",
                    display: "flex",
                    fontSize: "18px",
                    "&:hover": {
                      color: "pink",
                      borderBottom: "3px solid pink",
                    },
                  }}
                >
                  Home
                </Button>
              </a>
            </Link>

            <Link href="/">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#eee",
                    margin: "0 8px",
                    display: "flex",
                    fontSize: "18px",
                    "&:hover": {
                      color: "pink",
                      borderBottom: "3px solid pink",
                    },
                  }}
                >
                  Shows
                </Button>
              </a>
            </Link>

            <Link href="/">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#eee",
                    margin: "0 8px",
                    display: "flex",
                    fontSize: "18px",
                    "&:hover": {
                      color: "pink",
                      borderBottom: "3px solid pink",
                    },
                  }}
                >
                  Greenlight
                </Button>
              </a>
            </Link>

            <Link href="/">
              <a>
                <Button
                  onClick={handleCloseNavMenu}
                  className={"active-tv-font"}
                  sx={{
                    color: "#eee",
                    margin: "0 8px",
                    display: "flex",
                    fontSize: "18px",
                    "&:hover": {
                      color: "pink",
                      borderBottom: "3px solid pink",
                    },
                  }}
                >
                  Merch
                </Button>
              </a>
            </Link>

            <Link href="/">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#eee",
                    margin: "0 8px",
                    display: "flex",
                    fontSize: "18px",
                    "&:hover": {
                      color: "pink",
                      borderBottom: "3px solid pink",
                    },
                  }}
                >
                  Learn More
                </Button>
              </a>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={UserContext.name + UserContext.surname}
                src="/static/images/avatar/2.jpg"
              />
            </IconButton>

            {/* {logged ? (
              <Avatar
                alt={UserContext.name}
                src="/static/images/avatar/2.jpg"
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      sx={{
                        mr: 2,
                        color: "white",
                        display: "block",
                        fontSize: "16px",
                        width: {
                          lg: "130px",
                          xs: "100%",
                        },
                        "&:hover": {
                          background: "#eee",
                          color: "#111",
                        },
                      }}
                    >
                      Log in
                    </Button>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      variant="outline"
                      sx={{
                        mr: 2,
                        color: "white",
                        display: "block",
                        fontSize: "16px",
                        width: {
                          lg: "130px",
                          xs: "100%",
                        },
                        border: "1px solid white",
                        "&:hover": {
                          background: "#eee",
                          color: "#111",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </IconButton>
                </Tooltip>
              </Box>
            )} */}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
