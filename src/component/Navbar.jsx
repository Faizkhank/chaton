import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Avatar, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { motion } from "framer-motion";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Navbar()
{
    const { user , logOut } = UserAuth();
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return(<motion.div
        initial={{x:window.innerWidth}}
        animate={{x:0}}
        exit={{x:0}}>
    <Paper sx={{margin:4,display:'flex',justifyContent:'end',borderRadius:2,justifyContent:'space-between'}}>
    <div>
    <Typography sx={{paddingTop:1.3,paddingRight:1}}>Chaton</Typography>
    </div>
    <div style={{ display:"flex" }}>
<Typography sx={{paddingTop:1.3,paddingRight:1}}>{user.displayName}</Typography>
<Avatar sx={{margin:0.3}} alt={user.displayName} src={user.photoURL}
  id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}/>
<Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={logOut}>Logout</MenuItem>
</Menu>
</div>
    </Paper></motion.div>)
}

