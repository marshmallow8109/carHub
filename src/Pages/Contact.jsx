import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Phone, Mail, Facebook, WhatsApp, Twitter } from "@mui/icons-material";
import { useState } from "react";
import qestion from "../assets/img/question.png";
import Footer from "../components/footer";

const Contact = () => {
  const theme = useTheme();
  const background = theme.palette.background.alt;
  const p1 = theme.palette.primary.dark;
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");

  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box flexGrow={1}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"1rem"}
          margin={"0 auto"}
          width={!isNonMobileScreens ? "95%" : "900px"}
          sx={{
            backgroundImage: `url(${qestion})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Paper>
            <Typography
              variant="h4"
              textAlign={"center"}
              padding={"1rem"}
              whiteSpace={"nowrap"}
              borderRight={`3px solid ${p1}`}
              sx={{ background: background }}
            >
              Faq Section
            </Typography>
          </Paper>
          <Box mb={"2rem"} mt={"1rem"}>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={"1rem"}
              mb={"1rem"}
            >
              <IconButton>
                <WhatsApp />
              </IconButton>
              <IconButton>
                <Mail />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
            </Box>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={(event, isExpanded) =>
                handleChange(isExpanded, "panel1")
              }
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="h6" color={"gray"}>
                  What do I need to rent a car?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Most car rental companies in Florida require a valid driver's
                  license, a major credit card in the renter's name, and
                  sometimes an additional form of identification. International
                  renters might need their passport, and drivers under 25 years
                  old might face additional fees or restrictions
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={(event, isExpanded) =>
                handleChange(isExpanded, "panel2")
              }
            >
              <AccordionSummary
                id="panel2-header"
                aria-controls="panel2-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="h6" color={"gray"}>
                  What's the minimum age to rent a car?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The minimum age to rent a car in Florida is typically 21 years
                  old. However, drivers between 21 and 24 years old might be
                  subject to a "young driver" fee. Some rental companies may
                  also have a minimum age requirement of 25 to avoid these fees
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={(event, isExpanded) =>
                handleChange(isExpanded, "panel3")
              }
            >
              <AccordionSummary
                id="panel3-header"
                aria-controls="panel3-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="h6" color={"gray"}>
                  Do I need insurance to rent a car in Florida?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Car rental companies usually offer various insurance options,
                  including Collision Damage Waiver (CDW) and Liability
                  Insurance. Your personal auto insurance might cover rental
                  cars as well. It's important to understand your existing
                  coverage and the rental company's insurance offerings before
                  making a decision
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={(event, isExpanded) =>
                handleChange(isExpanded, "panel4")
              }
            >
              <AccordionSummary
                id="panel4-header"
                aria-controls="panel4-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="h6" color={"gray"}>
                  Can I drive the rental car out of state or to other
                  destinations in Florida?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Most car rental companies allow you to drive the rental car
                  out of state, but it's a good idea to inform them beforehand.
                  However, some rental companies might have restrictions on
                  driving their vehicles to certain specific destinations or
                  using them on unpaved roads, so it's best to check their
                  policies
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={(event, isExpanded) =>
                handleChange(isExpanded, "panel5")
              }
            >
              <AccordionSummary
                id="panel5-header"
                aria-controls="panel5-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="h6" color={"gray"}>
                  How do tolls work with rental cars in Florida?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Florida has toll roads, so it's important to know how tolls
                  are handled with rental cars. Some rental companies offer toll
                  payment options, where you can prepay for tolls or be charged
                  for the tolls you pass through during your rental period.
                  Others might charge a convenience fee if you use their toll
                  payment service. You can also use your own toll transponder,
                  but be aware of potential fees for doing so. Remember that the
                  specific policies and requirements may vary among different
                  car rental companies in Florida, so it's always a good idea to
                  check with the rental company directly for the most accurate
                  and up-to-date information.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
      <Box width={"100%"}>
        <Footer />
      </Box>
    </Box>
  );
};
export default Contact;
