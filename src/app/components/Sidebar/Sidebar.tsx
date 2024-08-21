import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  Quiz as QuizIcon,
  Person as PersonIcon,
  MeetingRoom,
  KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
  KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon,
} from "@mui/icons-material";
import Drawer from "./Drawer";
import { useRouter } from "next/router";
import { useProtectedSessionContext } from "@contexts/ProtectedProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
}));

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const pages = [
    {
      text: "Início",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      text: "Questões",
      icon: <QuizIcon />,
      href: "/questions",
    },
    { text: "Perfil", icon: <PersonIcon />, href: "/profile" },
  ];

  const router = useRouter();
  const { removeSessionData } = useProtectedSessionContext();

  const redirectToLoginPage = () => {
    removeSessionData();
    router.push("/");
  };

  console.log(router);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            paddingY="36px"
          >
            <Avatar alt="logo" sx={{ bgcolor: "#5671A6" }}>
              C
            </Avatar>
            {open && <Typography>Compensar</Typography>}
          </Stack>
        </DrawerHeader>
        <List>
          {pages.map(({ text, icon, href }, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
                borderRadius: "10px",
                boxShadow:
                  router.pathname === href ? "6px 10px 30px #0000000F" : "",
                width: !open ? "48px" : "calc(100% - 24px)",
                margin: "auto",
              }}
              onClick={() => router.push(href)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#BCBCBC",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: router.pathname === href ? "#5671A6" : "#BCBCBC",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: router.pathname === href ? "#5671A6" : "#BCBCBC",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem
            disablePadding
            sx={{
              display: "block",
              marginTop: "auto",
              borderRadius: "10px",
              width: !open ? "48px" : "calc(100% - 24px)",
              margin: "auto",
            }}
            onClick={redirectToLoginPage}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: "#BCBCBC",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#BCBCBC",
                }}
              >
                <MeetingRoom />
              </ListItemIcon>
              <ListItemText primary="Sair" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ marginTop: "auto" }} />
        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
              margin: 0,
            }}
          >
            <KeyboardDoubleArrowRightIcon />
          </IconButton>

          {!!open && (
            <Stack
              direction="row"
              alignItems="center"
              onClick={handleDrawerClose}
              sx={{ cursor: "pointer" }}
            >
              <IconButton>
                <KeyboardDoubleArrowLeftIcon />
              </IconButton>
              <Typography paddingRight="8px">Esconder menu</Typography>
            </Stack>
          )}
        </DrawerHeader>
      </Drawer>
    </Box>
  );
}
