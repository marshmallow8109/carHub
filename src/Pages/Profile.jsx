import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Button,
  Divider,
  Badge,
} from "@mui/material";
import { EditOutlined, AddAPhoto, Close, Settings } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useState } from "react";
import Black from "../assets/img/black.jpg";
import demo from "../assets/img/demo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setData, setLogout } from "../state/index";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import mokeTransactions from "../data/mockData";
import Footer from "../components/footer";

const Profile = () => {
  //state
  const [edith, setEdith] = useState(false);
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  //get data
  const name = useSelector((state) => state.data?.user?.userName);
  const email = useSelector((state) => state.data?.user?.email);
  const mode = useSelector((state) => state.mode);
  const _id = useSelector((state) => state.data?.user?._id);
  const token = useSelector((state) => state.data?.token);

  //use Theme
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const background = theme.palette.background.alt;
  const p1 = theme.palette.primary.dark;
  const p2 = theme.palette.primary.light;
  const p3 = theme.palette.text;

  const handleClick = async () => {
    if (_id === "64dabc64e28db5d1924ad200") {
      setMsg("This is a demo account, create your own account to edith");
      ClearText();
      return;
    }
    const body = { userName: userName, email: userEmail, _id };

    try {
      const response = await fetch(`https://carhub.cyclic.app/api/v1/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (response.status === 201) {
        dispatch(setData(data));
        setMsg("Updated!");
        ClearText();
      } else {
        setMsg(data.msg);
        ClearText();
      }
    } catch (error) {
      setMsg("Network error!");
      ClearText();
    }
  };

  const ClearText = () => {
    setTimeout(() => {
      setMsg("");
    }, 4000);
  };

  const columdata = [
    { field: "id", headerName: "ID" },
    {
      field: "car",
      headerName: "CAR",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "pick_up_location",
      headerName: "PICK UP",
      flex: 1,
    },
    {
      field: "drop_location",
      headerName: "DROP OFF",
      flex: 1,
    },
    {
      field: "date",
      headerName: "DATE",
      flex: 1,
    },
    {
      field: "price",
      headerName: "PRICE",
      flex: 1,
      headerAlign: "left",
      align: "left",
      type: "number",
    },
  ];

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
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          margin={"0 auto"}
          marginTop={"2rem"}
          marginBottom={"2rem"}
        >
          <Card
            sx={{
              width: `${!isNonMobileScreens ? "95%" : "900px"}`,
            }}
          >
            <CardMedia component="img" height={"140"} src={Black} />
            <CardContent>
              <Box
                width={"9.9rem"}
                height={"9.9rem"}
                position={"relative"}
                marginTop={"-12%"}
              >
                <img src={demo} className="profile-Image" alt="profile-pix" />
                <IconButton
                  className="Edith"
                  sx={{ zIndex: 10, marginTop: "-80%" }}
                >
                  <AddAPhoto
                    sx={{ color: mode === "dark" ? "null" : "#fff" }}
                  />
                </IconButton>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                >
                  <Typography variant="h4" color={p1}>
                    {name}
                  </Typography>
                  <Typography variant="body1">{email}</Typography>
                </Box>
                <IconButton onClick={() => setEdith(!edith)}>
                  {!edith ? <EditOutlined /> : <Close />}
                </IconButton>
              </Box>
              <Box display={"flex"} justifyContent={"flex-end"} mb={"0.5rem"}>
                <Typography>{msg}</Typography>
              </Box>
              {edith && (
                <form>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"1rem"}
                  >
                    <TextField
                      value={userName}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth
                      size="small"
                      label="Enter Name"
                    />

                    <TextField
                      value={userEmail}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      size="small"
                      label="Enter Email"
                    />
                  </Box>
                  <Box
                    marginTop={"1rem"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleClick}
                    >
                      update
                    </Button>
                  </Box>
                </form>
              )}
              <Divider sx={{ mt: "1rem", mb: "1rem" }} />
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={"1.5rem"}
              >
                <Box>
                  <Typography variant="h5">Your Dashborad</Typography>
                  <Typography variant="body1">Recent transactions</Typography>
                </Box>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => dispatch(setLogout())}
                >
                  LogOut
                </Button>
              </Box>
              <Box display={"flex"} justifyContent={"flex-end"} gap={"0.5rem"}>
                <Settings
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      scale: "110%",
                    },
                    transition: "all 0.5s",
                  }}
                />
                <Badge badgeContent={6} color="primary">
                  <NotificationsNoneIcon
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        scale: "110%",
                      },
                      transition: "all 0.5s",
                    }}
                  />
                </Badge>
              </Box>

              <Box
                m={"1rem 0 0 0"}
                height={"50vh"}
                width={"100%"}
                sx={{
                  "& .MuiDataGrid-root": {
                    border: "none",
                  },
                  "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: p2,
                    borderBottom: "none",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    backgroundColor: p2,
                    borderTop: "none",
                  },
                  "& .name-column--cell": {
                    color: p3,
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: background,
                  },
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${p3} !important`,
                    fontSize: `${!isNonMobileScreens ? "0.5rem" : null}`,
                  },
                }}
              >
                <DataGrid
                  rows={mokeTransactions}
                  columns={columdata}
                  components={{ Toolbar: GridToolbar }}
                />
              </Box>
              <Divider sx={{ mt: "1rem" }} />
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box width={"100%"}>
        <Footer />
      </Box>
    </Box>
  );
};
export default Profile;
