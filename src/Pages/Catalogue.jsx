import {
  Box,
  Typography,
  TextField,
  useTheme,
  useMediaQuery,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData, setMode } from "../state";
import carimg from "../assets/img/hero.png";
import heroBg from "../assets/img/hero-bg.png";
import data from "../data/data";
import showcase from "../assets/img/case.png";
import Footer from "../components/footer";

const Catalogue = () => {
  const [car, setCar] = useState("");
  const [error, setError] = useState("");
  const [urlString, setUrlString] = useState("");
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const hover = theme.palette.primary.dark;
  const p1 = theme.palette.primary.dark;
  const background = theme.palette.background.alt;
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");

  const carModel = data.filter(
    (item) => item.model.toLowerCase() === car.toLowerCase()
  );

  //get values from data
  const year = carModel.map((item) => item.year);
  const model = carModel.map((item) => item.model);
  const make = carModel.map((item) => item.make);

  const generateImgae = () => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    return `${url}`;
  };

  const handleClick = () => {
    const getData = async () => {
      setLoading(true);
      try {
        const respons = await fetch(generateImgae(), { method: "GET" });
        const data = await respons.url;
        setUrlString(data);
        setLoading(false);
      } catch (error) {
        setError("you seems to be offline");
        setLoading(false);
      }
    };
    getData();
  };

  return (
    <>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box flexWrap={1}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"1rem"}
            flexWrap={"wrap"}
            gap={"1rem"}
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
                variant="h3"
                className="heading"
                fontWeight={"bold"}
                color={hover}
              >
                Our Fleets
              </Typography>
              <Typography variant="body1" mt={"1rem"}>
                Discover our Impressive Fleet of Modern and Classic Automobiles
                to Enhance Your Exploration!
              </Typography>
            </Box>
            <Box
              width={!isNonMobileScreens ? "100%" : "50%"}
              padding={"1rem"}
              sx={{ objectFit: "contain" }}
            >
              <Paper elevation={4} sx={{ borderRadius: "5%" }}>
                <img src={carimg} width={"100%"} alt="hero Image" />
              </Paper>
            </Box>
          </Box>

          <Box margin={"0 auto"}>
            <Typography variant="h4" textAlign={"center"}>
              Search cars
            </Typography>
            <div className="underline"></div>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"1rem"}
            flexWrap={"wrap"}
            gap={"1rem"}
          >
            <Box width={!isNonMobileScreens ? "90%" : "400px"}>
              <TextField
                select
                size="small"
                value={car}
                onChange={(e) => setCar(e.target.value)}
                sx={{ width: "100%" }}
              >
                {data.map((item) => (
                  <MenuItem
                    value={item.model}
                    key={`${item.make} ${item.model}`}
                  >{`${item.make} ${item.model}`}</MenuItem>
                ))}
              </TextField>
            </Box>
            <Button variant="contained" onClick={handleClick}>
              search
            </Button>
          </Box>
          <Box
            width={!isNonMobileScreens ? "90%" : "550px"}
            margin={"0 auto"}
            borderRadius={"10%"}
            sx={{ objectFit: "contain", background: background }}
          >
            <Paper
              elevation={3}
              sx={{ padding: "1rem", width: "100%", borderRadius: "2%" }}
            >
              <img
                src={urlString === "" ? showcase : urlString}
                alt=""
                width={"100%"}
              />
            </Paper>
          </Box>
          <Box
            width={!isNonMobileScreens ? "90%" : "550px"}
            margin={"0 auto"}
            mb={"3rem"}
          >
            {urlString &&
              (!error ? (
                <Box>
                  <Typography variant="h4" color={p1}>
                    {car}
                  </Typography>
                  <Typography>{carModel.map((item) => item.class)}</Typography>
                </Box>
              ) : (
                <Box>
                  <Typography variant="h4">{error}</Typography>
                </Box>
              ))}
          </Box>
        </Box>
        <Box width={"100%"}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
export default Catalogue;
