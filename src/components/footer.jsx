import { Box, Typography, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useTheme();

  return (
    <Box
      width={"100%"}
      sx={{
        display: "grid",
        placeItems: "center",
        backgroundColor: "rgb(22, 21, 21)",
      }}
    >
      <Box textAlign={"center"} p={"0.5rem 0"}>
        <Typography color={mode === "dark" ? "gray" : "white"} variant="body2">
          &copy; 2023, augustrush.netlify.app +2347033218824.
        </Typography>
      </Box>
      <Box
        backgroundColor={"rgb(12, 12, 12)"}
        textAlign={"center"}
        p={"0.5rem 0"}
        width={"100%"}
        className="sliding-text-container"
      >
        <Box backgroundColor={"rgb(12, 12, 12)"} padding={"0.5rem 0"}>
          <div className="sliding-text">
            <Typography
              color={mode === "dark" ? "gray" : "white"}
              variant="body2"
            >
              Main Footer section This portfolio is a full-stack project
              developed using React with Vite for the front-end, and Node.js
              with Express and MongoDB for the back-end.
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
