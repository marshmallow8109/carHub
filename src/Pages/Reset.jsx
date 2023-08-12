import {
  Box,
  TextField,
  useMediaQuery,
  Typography,
  Button,
  useTheme,
  Paper,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const background = theme.palette.background.alt;

  const handleSubmit = async () => {
    if (!email) {
      setMsg("Please provide email!");
      clearError();
      return;
    }

    try {
      const response = await fetch(``, { method: "GET" });
      const data = await response.json();
      if (!response.status === 200) {
        setMsg(`No user Found!`);
        clearError();
      } else {
        //msg check your email
        navigate("/login");
      }
    } catch (error) {
      setMsg("NetWork Error!");
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
          Reset password
        </Typography>
        <div className="underline"></div>
      </Box>
      <Box padding={"1rem"} width={!isNonMobileScreens ? "90%" : "600px"}>
        <Paper elevation={4} sx={{ padding: "2rem" }}>
          <form>
            <Box sx={{ background: "inherit" }}>
              <TextField
                fullWidth
                label={"Enter password"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box mt={"2rem"}>
              <Button
                size="small"
                variant="contained"
                onClick={(e) => handleSubmit()}
              >
                Reset
              </Button>
            </Box>
          </form>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={"1.5rem"}
            mt={"1rem"}
            width={"100%"}
          >
            <Button variant="text" onClick={() => navigate("/login")}>
              login
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
export default Reset;
