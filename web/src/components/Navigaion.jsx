import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import ThemeSwitch from "./common/ThemSwitch";
import {routerNavigation} from "../utils/router";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const Navigation = ({setOpenModalSignIn}) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const navigate = useNavigate()
    const navigateToUser = () => {
        navigate(routerNavigation("/profile"))
        handleCloseUserMenu()
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <header className="bg-white dark:bg-slate-900 border-b-2 border-b-blue-300 mb-[30px]">
            <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className="flex" href="#">
                        <p className="text-2xl font-bold font-mono mr-1 text-gray-900 dark:text-white">
                            BidHub
                        </p>
                        <img
                            className="h-8"
                            src={require("../assets/logo/logo.png")}
                            alt="BidHub"
                        />
                    </a>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link
                                    to={routerNavigation("/")}
                                    className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75"
                                >
                                    {" "}
                                    Home{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={routerNavigation("/biding")}
                                    className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75"
                                >
                                    {" "}
                                    Bid{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={routerNavigation("/about")}
                                    className="text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75"
                                >
                                    {" "}
                                    About{" "}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <div
                            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow cursor-pointer"
                            onClick={() => {
                                setOpenModalSignIn(true);
                            }}
                        >
                            Login
                        </div>

            <div className="hidden sm:flex">
                <Link
                  to={routerNavigation("/seller")}
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow cursor-pointer"
                >
                  {" "}
                  Sell{" "}
                </Link>

            </div>
          </div>
          <ThemeSwitch />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
                <MenuItem key={setting} onClick={navigateToUser}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 dark:bg-gray-700 p-2 text-gray-600 dark:text-gray-300 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
