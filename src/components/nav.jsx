import DisplayFlexBetween from "./DisplayFlexBetween";
import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  LightModeOutlined,
  DarkModeOutlined,
  Close,
} from "@mui/icons-material";
import { setMode } from "../state";
import logo from "../assets/img/car-small.png";
import driveIcon from "../assets/img/driveIcon.png";

const Nav = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const theme = useTheme();
  const background = theme.palette.background.alt;
  const mediumMain = theme.palette.neutral.mediumMain;
  const dark = theme.palette.neutral.dark;
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");

  return (
    <DisplayFlexBetween padding="1rem 3%" backgroundColor={background}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"0.5rem"}
        sx={{
          cursor: "pointer",
          "&:hover": {
            scale: "105%",
          },
          transition: "all 0.5s",
        }}
        padding={"0.3rem"}
        onClick={() => navigate("/")}
      >
        <Avatar src={logo} alt="logo" />
        <Typography variant="h6" fontWeight={"bold"}>
          CarHub
        </Typography>
      </Box>

      <Box>
        {isNonMobileScreens ? (
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <IconButton
              sx={{
                "&:hover": {
                  rotate: "180deg",
                },
                transition: "all 0.5s",
              }}
              onClick={() => dispatch(setMode())}
            >
              {mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
            </IconButton>
            <Box
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  scale: "105%",
                },
              }}
            >
              <Typography variant="h6">Home</Typography>
            </Box>
            <Box
              onClick={() => navigate("/catalogue")}
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  scale: "105%",
                },
              }}
            >
              <Typography variant="h6">Catalogue</Typography>
            </Box>
            <Box
              onClick={() => navigate("/profile")}
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  scale: "105%",
                },
              }}
            >
              <Typography variant="h6">Profile</Typography>
            </Box>
            <Box
              onClick={() => navigate("/contact")}
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  scale: "105%",
                },
              }}
            >
              <Typography variant="h6">FAQ</Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => navigate("/login")}
            >
              Sign in
            </Button>
          </Box>
        ) : (
          <Box>
            <IconButton onClick={() => dispatch(setMode())}>
              {mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
            </IconButton>

            <IconButton
              sx={{
                "&:hover": {
                  rotate: "360deg",
                  transition: "all 1s",
                },
              }}
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <Close /> : <Menu />}
            </IconButton>

            {toggle && (
              <Box
                position={"absolute"}
                top={"5rem"}
                right={0}
                width={"60vw"}
                zIndex={10}
                height={"auto"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={"0.5rem"}
                paddingBottom={"2rem"}
                sx={{ background: background }}
              >
                <Box
                  width={"100%"}
                  padding={"1rem"}
                  textAlign={"center"}
                  onClick={() => [navigate("/"), setToggle(false)]}
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.5s",
                    "&:hover": {
                      background: mediumMain,
                      color: mode === "light" && "whitesmoke",
                    },
                  }}
                >
                  <Typography>Home</Typography>
                </Box>
                <Box
                  width={"100%"}
                  padding={"1rem"}
                  textAlign={"center"}
                  onClick={() => [navigate("/catalogue"), setToggle(false)]}
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.5s",
                    "&:hover": {
                      background: mediumMain,
                      color: mode === "light" && "whitesmoke",
                    },
                  }}
                >
                  <Typography>Catalogue</Typography>
                </Box>
                <Box
                  width={"100%"}
                  padding={"1rem"}
                  textAlign={"center"}
                  onClick={() => [navigate("/profile"), setToggle(false)]}
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.5s",
                    "&:hover": {
                      background: mediumMain,
                      color: mode === "light" && "whitesmoke",
                    },
                  }}
                >
                  <Typography>Profile</Typography>
                </Box>
                <Box
                  width={"100%"}
                  padding={"1rem"}
                  textAlign={"center"}
                  onClick={() => [navigate("/contact"), setToggle(false)]}
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.5s",
                    "&:hover": {
                      background: mediumMain,
                      color: mode === "light" && "whitesmoke",
                    },
                  }}
                >
                  <Typography>FAQ</Typography>
                </Box>

                <Box>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => [navigate("/login"), setToggle(false)]}
                  >
                    sign in
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </DisplayFlexBetween>
  );
};

export default Nav;
