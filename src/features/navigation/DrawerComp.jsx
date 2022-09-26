import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";



const DrawerListItem =({page}) =>{
    return (
      <ListItemButton>
      <ListItemIcon>
        <ListItemText>{page}</ListItemText>
      </ListItemIcon>
    </ListItemButton>
    )
}


const DrawerComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Drawer 
      open={isOpen} 
      onClose={() => setIsOpen(false)}
      anchor='right'
      >
        <List>
      <DrawerListItem page='Self'/>
      <DrawerListItem page='City'/>
      <DrawerListItem page='Future' />
        </List>
      </Drawer>
      <Typography variant='h5'>Systems</Typography>
      <IconButton onClick={() => setIsOpen(true) }>
          <MenuIcon />
        </IconButton>
    </>
  );
};

export default DrawerComp;
