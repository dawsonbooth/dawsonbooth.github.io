import * as React from "react";

import { Box, Flex, useColorMode } from "theme-ui";

import { NavLink, IconNavLink } from "../Link";
import { PaletteIcon } from "../icons";

import theme from "../../theme";
import routes from "../../routes";

const modes = [theme.initialColorModeName, ...Object.keys(theme.colors.modes)];

const PaletteButton = () => {
  const [mode, setMode] = useColorMode();

  return (
    <IconNavLink
      onClick={() => {
        const index = modes.indexOf(mode);
        const next = modes[(index + 1) % modes.length];
        setMode(next);
      }}
      sx={{ cursor: "pointer" }}
    >
      <PaletteIcon />
    </IconNavLink>
  );
};

const Navigation = () => (
  <Flex sx={{ flexWrap: "nowrap" }}>
    <NavLink to={routes.HOME}>Home</NavLink>
    <NavLink to={routes.CV}>CV</NavLink>
    <NavLink to={routes.PROJECTS}>Projects</NavLink>
    <NavLink to={routes.CONTACT}>Contact</NavLink>
  </Flex>
);

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      py={2}
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "muted",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 6px",
      }}
    >
      <Flex
        px={3}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 900,
          margin: "auto",
        }}
      >
        <Navigation />
        <PaletteButton />
      </Flex>
    </Box>
  );
};

export default Header;
