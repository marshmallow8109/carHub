import {
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { Person2Outlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../state";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Select from "../components/select";
import Guide from "../components/Guide";

const Home = () => {
  const mode = useSelector((state) => state.mode);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const background = theme.palette.background.alt;
  const mediumMain = theme.palette.neutral.mediumMain;
  const dark = theme.palette.neutral.dark;

  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box flexGrow={1}>
        <Hero />
        <Select />
        <Guide />
      </Box>
      <Box width={"100%"}>
        <Footer />
      </Box>
    </Box>
  );
};
export default Home;
