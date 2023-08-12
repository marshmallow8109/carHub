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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../state";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const background = theme.palette.background.alt;

  const handleClick = async () => {
    if (!userName || !email || !password) {
      setMsg("Enter name, email and password!");
      clearError();
      return;
    }

    const body = { userName, email, password };

    try {
      const response = await fetch(`http://localhost:5000/api/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log(response);
      if (response.status === 201) {
        dispatch(setData(data));
        navigate("/");
      } else {
        setMsg(data.msg);
        clearError();
      }
    } catch (error) {
      setMsg("Network error!");
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
          Register
        </Typography>
        <div className="underline"></div>
      </Box>
      <Box padding={"1rem"} width={!isNonMobileScreens ? "90%" : "600px"}>
        <Paper elevation={4} sx={{ padding: "2rem" }}>
          <form>
            <Box sx={{ background: "inherit" }}>
              <TextField
                fullWidth
                label={"Full Name"}
                value={userName}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                label={" Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <Box mt={"2rem"}>
              <Button
                size="small"
                variant="contained"
                onClick={(e) => handleClick()}
              >
                Register
              </Button>
            </Box>
          </form>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={"2rem"}
          >
            <Button variant="text" onClick={() => navigate("/reset")}>
              Reset password
            </Button>
            <Button variant="text" onClick={() => navigate("/login")}>
              Login
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
export default Register;
