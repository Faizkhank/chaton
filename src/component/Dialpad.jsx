import React, { useState, useContext, useEffect } from 'react';
import {Button,TextField, Typography, Container, Paper} from "@mui/material";
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import { SocketContext } from '../Services/services';
import { UserAuth } from '../context/AuthContext';

const Dialpad = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const { user } = UserAuth();
    const [idToCall, setIdToCall] = useState('');
    return (
      <Container style={{ width:"25%",marginTop:10,borderRadius:10}}>
        <Paper elevation={3} sx={{p:2,borderRadius:4}}>
                <Typography gutterBottom variant="h6">Make a call</Typography>
                <TextField label="ID to call" style={{ Zindex:0 }} value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                {callAccepted && !callEnded ? (
                  <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall}>
                    Hang Up
                  </Button>
                ) : (
                  <Button variant="contained" sx={{ backgroundColor:'rgb(11, 44, 44)',marginTop:1 }} startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)}>
                    Call
                  </Button>
                )}

          {children}
        </Paper>
        <Paper elevation={3} sx={{p:2,borderRadius:4,marginTop:2,height:'auto'}}>
        <Typography gutterBottom variant="h6">Your id</Typography>
        <TextField value={me} ></TextField>
        </Paper>
      </Container>
    );
  };
  
  export default Dialpad;