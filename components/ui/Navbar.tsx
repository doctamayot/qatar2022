//React
import React, { useState, useContext, useEffect } from "react";

//Next
import { useRouter } from "next/router";

import NextLink from "next/link";

//import { useSession, signOut, signIn, getProviders } from "next-auth/react";

//MUI
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  ClearOutlined,
  SearchOutlined,
  Widgets,
  ExitToApp,
  Person,
} from "@mui/icons-material";

//App

import { UiContext } from "../../context";

export const Navbar = () => {
  const { push } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [prov, setProv] = useState<any>({});

  // useEffect(() => {
  //   (async () => {
  //     const providers = await getProviders();
  //     setProv(providers as any);
  //   })();
  // }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const { data: session, status } = useSession();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  return (
    <AppBar
      sx={{
        height: 70,
        fontSize: "16.2px",
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center" sx={{ marginTop: "5px" }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#fff",
                fontSize: "50px",
                fontFamily: "'Shalimar', cursive",
              }}
            >
              Polla Tamayo
            </Typography>
          </Link>
        </NextLink>
        <Box flex={1} />

        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            marginLeft: "20px",
          }}
          className="fadeIn"
        >
          <NextLink href="/grupos/grupoa" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  fontSize: "20.2px",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle2">Grupo A</Typography>
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/grupos/grupob" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  fontSize: "20.2px",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle2">Grupo B</Typography>
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/grupos/grupoc" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  fontSize: "20.2px",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle2">Grupo C</Typography>
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/grupos/grupod" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  fontSize: "20.2px",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle2">Grupo D</Typography>
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/grupos/grupoe" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  fontSize: "20.2px",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle2">Grupo E</Typography>
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/grupos/grupof" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  fontSize: "20.2px",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle2">Grupo F</Typography>
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/grupos/grupog" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  fontSize: "20.2px",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle2">Grupo G</Typography>
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/grupos/grupoh" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  fontSize: "20.2px",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle2">Grupo H</Typography>
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/grupos/octavos" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  fontSize: "20.2px",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle2">Finales</Typography>
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        {isSearchVisible ? (
          <Input
            sx={{
              display: { xs: "none", sm: "flex" },
              color: "#FFF",
              borderBottom: "0.5px solid #fff",
            }}
            className="fadeIn"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            type="text"
            disableUnderline={true}
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlined sx={{ color: "#FFF" }} />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            onClick={() => setIsSearchVisible(true)}
            className="fadeIn"
            sx={{ display: { xs: "none", sm: "flex" }, color: "#FFF" }}
          >
            <SearchOutlined />
          </IconButton>
        )}

        {/* {session ? (
          <Box
            onClick={() => signOut()}
            sx={{ display: { xs: "flex" } }}
            alignItems="center"
          >
            <IconButton sx={{ display: { xs: "flex" }, color: "#fff" }}>
              <ExitToApp sx={{ marginRight: "10px" }} />
              <Typography
                sx={{
                  marginRight: "20px",
                  fontSize: "0.8em",
                  color: "#fff",
                  fontFamily: "Roboto Condensed, sans-serif",
                }}
              >
                Logout
              </Typography>
            </IconButton>
          </Box>
        ) : (
          <Box
            display="flex"
            onClick={() =>
              signIn(prov.google.id, {
                callbackUrl: "/",
              })
            }
          >
            <IconButton sx={{ display: { xs: "flex" }, color: "#fff" }}>
              <Person />
              <Typography
                sx={{
                  marginRight: "20px",
                  marginLeft: "10px",

                  fontSize: "17px",
                  color: "#fff",
                  fontFamily: "Roboto Condensed, sans-serif",
                }}
              >
                Login
              </Typography>
            </IconButton>
          </Box>
        )} */}

        <Button
          onClick={toggleSideMenu}
          variant="text"
          sx={{ fontSize: "16.2px", color: "#fff" }}
        >
          <Widgets />
        </Button>
      </Toolbar>
    </AppBar>
  );
};
