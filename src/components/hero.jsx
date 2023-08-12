import {
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import car from "../assets/img/car-Large.png";
import heroBg from "../assets/img/hero-bg.png";
import hero from "../assets/img/hero.png";
import DisplayFlexBetween from "./DisplayFlexBetween";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const hover = theme.palette.primary.dark;
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"1rem"}
        flexWrap={"wrap"}
        gap={"2rem"}
      >
        <Box
          width={!isNonMobileScreens ? "100%" : "40%"}
          padding={"1rem"}
          sx={{
            "&:hover": {
              border: `1px solid ${hover}`,
              borderRadius: "10px",
            },
          }}
        >
          <Typography
            variant="h4"
            className="heading"
            fontWeight={"bold"}
            color={hover}
          >
            Find, Book, or Rent a car -quickly and easily
          </Typography>
          <Typography variant="body1" mt={"1rem"} color="text.secondary">
            Unlock the Roads to Adventure in Florida - Discover, Reserve, and
            Drive with Ease! Find, Book, or Rent a Car Quickly and Easily for
            Your Ultimate Floridian Journey!
          </Typography>
          <Box mt={"1rem"} display={"flex"} gap={"1rem"}>
            <Button variant="contained" onClick={() => navigate("/catalogue")}>
              Explore Cars
            </Button>
            <Button variant="outlined">Learn more</Button>
          </Box>
        </Box>
        <Box
          width={!isNonMobileScreens ? "100%" : "50%"}
          sx={{ objectFit: "cover" }}
        >
          <img src={car} width={"100%"} alt="hero Image" />
        </Box>
      </Box>
    </>
  );
};
export default Hero;
