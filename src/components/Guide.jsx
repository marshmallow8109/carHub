import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import carIcon from "../assets/img/model-icon.png";
import operator from "../assets/img/operator.png";
import drive from "../assets/img/tick.png";

const Guide = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const theme = useTheme();
  const p2 = theme.palette.primary.dark;
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        width={!isNonMobileScreens ? "100%" : "500px"}
        margin={"0 auto"}
        marginTop={"6rem"}
      >
        <Typography variant="h6">Plan your trip now with our</Typography>
        <Typography mb={"2rem"} variant="h4" color={p2} textAlign={"center"}>
          Quick and easy car rental{" "}
        </Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={"3rem"}
        padding={"1rem"}
        mb={"2rem"}
      >
        <Box display={"grid"} sx={{ placeItems: "center" }} width={"300px"}>
          <img src={carIcon} width={"30px"} height={"30px"} alt="icon" />
          <Typography variant="body1" fontWeight={"bold"}>
            select car
          </Typography>
          <Typography textAlign={"center"} variant="body2" mt={"1rem"}>
            select a car from our luxurious fleet for your rental needs.
          </Typography>
        </Box>
        <Box display={"grid"} sx={{ placeItems: "center" }} width={"300px"}>
          <img src={operator} width={"30px"} height={"30px"} alt="icon" />
          <Typography variant="body1" fontWeight={"bold"}>
            contact operator
          </Typography>
          <Typography textAlign={"center"} variant="body2" mt={"1rem"}>
            contact our operators for assistance with availability checks and
            booking your ride.
          </Typography>
        </Box>
        <Box display={"grid"} sx={{ placeItems: "center" }} width={"300px"}>
          <img
            src={drive}
            width={"30px"}
            height={"30px"}
            alt="icon"
            color={p2}
          />
          <Typography variant="body1" fontWeight={"bold"}>
            drive off
          </Typography>
          <Typography textAlign={"center"} variant="body2" mt={"1rem"}>
            Then sit back, relax, have a fantastic ride and enjoy the journey!
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Guide;
