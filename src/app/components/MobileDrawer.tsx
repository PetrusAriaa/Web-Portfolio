"use client";
import {useState, Fragment} from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {MdDensityMedium} from "react-icons/md";
import Link from "next/link";
export const MobileDrawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const Drawer = () => (
    <Box
      sx={{width: 250}}
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(true)}
      className="bg-myBlack2 h-screen text-myWhite"
    >
      <List>
        {[
          {name: "About", link: "/"},
          {name: "Projects", link: "/projects"},
          {name: "Know Me", link: "/knowme"},
          {name: "Blog", link: "/blog"},
        ].map((item, i) => (
          <Link href={item.link} key={i}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={toggleDrawer(false)}
                className="hover:bg-myBlue1/25 hover:text-myBlue1"
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="sticky top-0 z-[999]">
      <Fragment>
        <Button
          className="bg-myBlack/75 aspect-square outline outline-1 outline-myWhite/25 backdrop-blur-sm drop-shadow-lg shadow-lg"
          onClick={toggleDrawer(true)}
          sx={{p: 1}}
        >
          <MdDensityMedium size={25} className="text-myBlue1" />
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Drawer />
        </SwipeableDrawer>
      </Fragment>
    </div>
  );
};
