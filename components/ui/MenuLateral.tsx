//react
import { useContext, useEffect, useState } from "react";
//Next
import { useRouter } from "next/router";
import { useSession, signOut, getProviders, signIn } from "next-auth/react";
//MUI
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  Airplay,
  Animation,
  AssuredWorkload,
  CategoryOutlined,
  LibraryBooks,
  LoginOutlined,
  ManageHistory,
  MilitaryTech,
  PrecisionManufacturing,
  SearchOutlined,
  VpnKeyOutlined,
  WorkspacePremium,
} from "@mui/icons-material";
//APP
import { UiContext } from "../../context";

export const MenuLateral = () => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  const [searchTerm, setSearchTerm] = useState("");

  const { data: session, status }: any = useSession();

  const [prov, setProv] = useState<any>({});

  useEffect(() => {
    (async () => {
      const providers = await getProviders();
      setProv(providers as any);
    })();
  }, []);

  // console.log(status);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    navigateTo(`/search/${searchTerm}`);
  };

  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.push(url);
  };
  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
      onClose={toggleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <Divider />

          {session ? (
            <>
              <ListItem button onClick={() => navigateTo("/grupos/grupoa")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Grupo A"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/grupos/grupob")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Grupo B"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/grupos/grupoc")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Grupo C"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/grupos/grupod")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Grupo D"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/grupos/grupoe")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Grupo E"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/grupos/grupof")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Grupo F"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/grupos/grupog")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Grupo G"} />
              </ListItem>
              <ListItem button onClick={() => navigateTo("/grupos/grupoh")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Grupo H"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/grupos/octavos")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Finales"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/grupos/extras")}>
                <ListItemIcon>
                  <MilitaryTech />
                </ListItemIcon>
                <ListItemText primary={"Extras"} />
              </ListItem>
              <ListItem button onClick={() => signOut()}>
                <ListItemIcon>
                  <LoginOutlined />
                </ListItemIcon>
                <ListItemText primary={"Salir"} />
              </ListItem>
            </>
          ) : (
            <ListItem
              button
              onClick={() => signIn(prov.google.id, { callbackUrl: "/" })}
            >
              <ListItemIcon>
                <VpnKeyOutlined />
              </ListItemIcon>
              <ListItemText primary={"Ingresar"} />
            </ListItem>
          )}

          {/* Admin */}
          {/* {session && session.user && session.user.role === "Admin" ? (
            <>
              <Divider />
              <ListSubheader>Admin Panel</ListSubheader>

              <ListItem button onClick={() => navigateTo("/admin/products")}>
                
                <ListItemIcon>
                  <CategoryOutlined />
                </ListItemIcon>
                <ListItemText primary={"Productos"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/admin/invproducts")}>
                <ListItemIcon>
                  <AdminPanelSettings />
                </ListItemIcon>
                <ListItemText primary={"Inventario"} />
              </ListItem>

              <ListItem button onClick={() => navigateTo("/admin/blog")}>
                <ListItemIcon>
                  <LibraryBooks />
                </ListItemIcon>
                <ListItemText primary={"Blog"} />
              </ListItem>
            </>
          ) : null} */}
        </List>
      </Box>
    </Drawer>
  );
};
