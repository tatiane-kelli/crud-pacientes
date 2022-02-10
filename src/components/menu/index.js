import React, { useState } from "react";
import { Grid } from "@mui/material";
import history from "../../services/history";
import {
  MenuItem,
  Flex,
  TitleMenu,
  IconArrowRight,
} from "./styles";

const SideMenu = () => {
  const [current, setCurrent] = useState(null);

  const redirect = (value, route) => {
    setCurrent(value);
    history.push(route);
  };

  return (
    <>
      <MenuItem
        active={current === 1 ? true : false}
        onClick={() => redirect(1, "/patients")}
      >
        <Grid container>
          <Grid item xs={11} md={11} lg={11}>
            <Flex>
              <TitleMenu>Pacientes</TitleMenu>
            </Flex>
          </Grid>
          <Grid item xs={1} md={1} lg={1}>
            <IconArrowRight />
          </Grid>
        </Grid>
      </MenuItem>
    </>
  );
};

export default SideMenu;