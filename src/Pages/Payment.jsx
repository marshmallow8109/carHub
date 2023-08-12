import { Box, Paper, Typography, useMediaQuery } from "@mui/material";

const Payment = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Paper
          sx={{
            width: `${isNonMobileScreens ? "500px" : "90%"}`,
            mt: "3rem",
            mb: "1rem",
            padding: "2rem",
          }}
        >
          <Typography variant="h4" textAlign={"center"}>
            Connect to payment Api
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            To process payment
          </Typography>
        </Paper>
      </Box>
    </>
  );
};
export default Payment;
