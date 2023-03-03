import {React} from "react";
import { motion } from "framer-motion";
import Paper from '@mui/material/Paper';
import { Box, Grid } from "@mui/material";
import Video from "./Videoplayer";
import Dialpad from "./Dialpad";
import Notifications from "./Notification";

export default function Main()
{
return(<motion.div
    initial={{x:window.innerWidth}}
    animate={{x:0}}
    exit={{x:0}}>
     <div style={{ width: '100%',height:window.innerHeight-150}}>
    <Box sx={{
        display:"flex",
        marginTop:5,
        backgroundColor:'white',
        height:'auto',
        m:4,
        borderRadius:2,
        height:'100%'
    }}>
    <div>
   <Video/>
   </div>
   <Dialpad/>
  <Notifications/>
  </Box>
  </div>
</motion.div>)
}