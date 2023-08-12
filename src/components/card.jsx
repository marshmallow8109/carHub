import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Card = ({ pick, drop, car, data, date, setOpen }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const p1 = theme.palette.primary.dark;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [urlString, setUrlstring] = useState("");

  const carModel = data.filter(
    (item) => item.model.toLowerCase() === car.toLowerCase()
  );

  //get values from data
  const year = carModel.map((item) => item.year);
  const model = carModel.map((item) => item.model);
  const make = carModel.map((item) => item.make);

  //generate image url
  const generateImgae = () => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    return `${url}`;
  };

  const getData = async () => {
    setLoading(true);
    try {
      const respons = await fetch(generateImgae(), { method: "GET" });
      const data = await respons.url;
      setUrlstring(data);
      setLoading(false);
    } catch (error) {
      setError("you seems to be offline");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [car]);

  //set structure for module (card) data
  const moduleData = carModel.map(
    ({
      drive,
      displacement,
      transmission,
      cylinders,
      fuel_type,
      year,
      city_mpg,
    }) => {
      return {
        drive,
        displacement,
        transmission,
        cylinders,
        fuel_type,
        city_mpg,
        year,
      };
    }
  );

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box mb={"1rem"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"}>
            <Typography>$</Typography>
            <Typography variant="h3" color={p1}>
              {carModel.map((item) => item.price)}
            </Typography>
            <Typography display={"flex"} alignItems={"flex-end"}>
              /day
            </Typography>
          </Box>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        {urlString === "" ? (
          <Box
            width={"200px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            {error ? (
              <Typography variant="h6" width={"100%"}>
                {error}
              </Typography>
            ) : (
              <Typography variant="h6" width={"100%"}>
                Loading image...
              </Typography>
            )}
          </Box>
        ) : (
          <img src={urlString} alt={make} width={"100%"} className="pro" />
        )}
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"start"}
          flexDirection={"column"}
        >
          <Typography variant="h4" color={p1}>
            {carModel.map((item) => item.make)}
          </Typography>
          <Typography variant="h6">{car}</Typography>
        </Box>
        <Divider />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          width={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            padding={"0.5rem"}
            width={"100%"}
            mb={"1rem"}
            mt={"1rem"}
          >
            {moduleData.map((item) =>
              Object.entries(item).map(([key, value]) => (
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  key={key}
                >
                  <Typography variant="body2">{key}</Typography>
                  <Typography variant="body1" color={p1}>
                    {value}
                  </Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>
        <Divider sx={{ mb: "0.5rem" }} />
        <Box display={"flex"} justifyContent={"flex-end"} padding={"0.1rem"}>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate("/payment")}
          >
            pay now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
