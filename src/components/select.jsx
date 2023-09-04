import {
  Box,
  Typography,
  useTheme,
  TextField,
  MenuItem,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { CarRental } from "@mui/icons-material";
import PlaceIcon from "@mui/icons-material/Place";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import data from "../data/data";
import Card from "./card";
import pickstates from "../data/locations";

const Select = () => {
  const [car, setCar] = useState("");
  const [pick, setPick] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState(null);
  const theme = useTheme();
  const p1 = theme.palette.primary.dark;
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    console.log("from car select", car);
    setOpen(true);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        mt={"2rem"}
        width={isNonMobileScreens ? "800px" : "80%"}
        margin={"0 auto"}
        padding={"0.5rem"}
      >
        <Typography variant="h4" color={p1} textAlign={"center"}>
          Book a car now
        </Typography>
        <div className="underline"></div>
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={"1rem"}
          flexWrap={"wrap"}
        >
          <Box
            width={!isNonMobileScreens ? "80vw" : "250px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <IconButton>
                <CarRental />
              </IconButton>
              <Typography variant="body1"> Select Car</Typography>
            </Box>
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
          <Box
            width={!isNonMobileScreens ? "80vw" : "250px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <IconButton>
                <PlaceIcon />
              </IconButton>
              <Typography variant="body1"> Select Pickup Location</Typography>
            </Box>
            <TextField
              select
              size="small"
              value={pick}
              onChange={(e) => setPick(e.target.value)}
              sx={{ width: "100%" }}
            >
              {pickstates.map((item) => (
                <MenuItem value={item.state} key={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box
            width={!isNonMobileScreens ? "80vw" : "250px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <IconButton>
                <PlaceIcon />
              </IconButton>
              <Typography variant="body1"> Select Drop Location</Typography>
            </Box>
            <TextField
              select
              size="small"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              sx={{ width: "100%" }}
            >
              {pickstates.map((item) => (
                <MenuItem value={item.state} key={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={"1rem"}
          flexWrap={"wrap"}
          mt={"1.5rem"}
          mb={"2rem"}
        >
          <DatePicker
            sx={{ width: isNonMobileScreens ? "250px" : "80vw" }}
            value={date}
            onChange={(newValue) => setDate(newValue)}
            label={"Select Date"}
            slotProps={{ textField: { variant: "outlined", size: "small" } }}
          />
          <Button variant="contained" size="small" onClick={handleOpen}>
            Book Now
          </Button>
        </Box>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Card
            data={data}
            car={car}
            pick={pick}
            drop={drop}
            date={date}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </LocalizationProvider>
  );
};
export default Select;
