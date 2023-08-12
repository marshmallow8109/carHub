import {
  Box,
  TextField,
  useMediaQuery,
  Typography,
  Button,
  useTheme,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setData } from "../state";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const background = theme.palette.background.alt;

  const handleSubmit = async (e) => {
    // if (!email || !password) {
    //   setMsg("Enter email and password!");
    //   clearError();
    //   return;
    // }

    const body = { email, password };

    try {
      const response = await fetch(`http://localhost:5000/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (response.status === 200) {
        dispatch(setData(data));
        navigate("/");
      } else {
        setMsg(data.msg);
        clearError();
      }
    } catch (error) {
      setMsg("Network Error!");
      clearError();
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setMsg(" ");
    }, 3000);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box mt={"2rem"}>
        <Typography variant="h4" textAlign={"center"}>
          LOGIN
        </Typography>
        <div className="underline"></div>
      </Box>
      <Box padding={"1rem"} width={!isNonMobileScreens ? "90%" : "600px"}>
        <Paper elevation={4} sx={{ padding: "2rem" }}>
          <form>
            <Box sx={{ background: "inherit" }}>
              <TextField
                fullWidth
                label={"Enter Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                label={"Enter password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <Box mt={"2rem"}>
              <Button
                size="small"
                variant="contained"
                onClick={(e) => handleSubmit()}
              >
                login
              </Button>
            </Box>
          </form>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={"2rem"}
            width={"100%"}
          >
            <Button variant="text" onClick={() => navigate("/reset")}>
              forget password?
            </Button>
            <Button variant="text" onClick={() => navigate("/register")}>
              Sign up
            </Button>
          </Box>
          <Typography
            color={"#fff"}
            textAlign={"center"}
            sx={{
              background: "rgb(145, 50, 50)",
              borderRadius: "4px",
            }}
          >
            {msg}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};
export default Login;
