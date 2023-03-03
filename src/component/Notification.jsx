import React, { useContext} from 'react';
import { SocketContext } from '../Services/services';
import { Button,Paper } from '@mui/material';
import { Avatar, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const Notifications = () => {
  const { answerCall, call, callAccepted,leaveCall, Canclecall} = useContext(SocketContext);
  console.log(call)
  return (<div>{ call.isReceivingCall && !callAccepted && (<motion.div
  initial={{x:0}}
  animate={{x:-400}}
  exit={{x:0}}
   ><Box sx={{width:400, height:150,position:'absolute',zIndex:9999,opacity:1,borderRadius:2,bottom:-550}}>
   <Paper sx={{ width:'24em', height:'10em',display:'flex',backgroundColor:'rgb(11, 44, 44)',flexWrap:'wrap'}}>
   <div style={{padding:10,width:'100%',height:90,display:'flex'}}>
   <Avatar src={call.name.photon}/>
   <Typography  style={{ padding:7,color:'white'}}>{call.name.Name}</Typography>
   </div>
  <Button sx={{ color:'rgb(11, 44, 44)',backgroundColor:"white",height:35,margin:1}} onClick={answerCall}>Accept</Button>
  <Button sx={{ color:'rgb(11, 44, 44)',backgroundColor:"#D61355",height:35,margin:1}} onClick={Canclecall}>Cancle</Button>
  </Paper>
  </Box></motion.div>)}</div>);
};

export default Notifications;
