import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Paper from '@mui/material/Paper';
import {Container,TextField, Button} from '@mui/material';
import { motion } from "framer-motion";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import './style.css';

export default function Auth(){
    const navigate = useNavigate();
    const { googleSignIn,user } = UserAuth();
    const auth = getAuth();
    const [ data , setdata ] = useState({});
    const [value, setvalue] = useState(0);
    const handlechange = (e) =>{
        let newInput = {[e.target.name] : e.target.value}
        setdata({...data,...newInput});
    }
    const handleSubmit = () =>{
        createUserWithEmailAndPassword(auth,data.email,data.password).then((response) =>
        {
           if(response.operationType=="signIn")
           {
            navigate('/main');
            setvalue(window.innerWidth);
           }
        })
    }
    const handleGoogleSign = async () =>
    {
        try{
            await googleSignIn();

        }catch(error)
        {
            console.log(error);
        }
    };
    useEffect(()=>
    {
        if(user!=null)
        {
          navigate('/main')
        }
    },[])
    return(<motion.div
    initial={{x:0 ,opacity:0}}
    animate={{x:value,opacity:1}}
    exit={{x:0,opacity:0}}
    >
    <Container sx={{display:"flex",justifyContent:'center'}}>
    <Paper className="login">
    <TextField name='email' sx={{justifyContent:"center",width:'90%',margin:3}} onChange={(e)=>{handlechange(e)}} label='Email'></TextField>
    <TextField name='password' sx={{justifyContent:"center",width:'90%',margin:3}} onChange={(e)=>{handlechange(e)}} label='Password'></TextField>
    <div style={{display:"flex",justifyContent:"center"}}><Button className="button" sx={{backgroundColor:'rgb(11, 44, 44)',color:'white',width:120}} onClick={handleSubmit}>Submit</Button></div>
    <div style={{display:"flex",justifyContent:"center"}}><Button onClick={handleGoogleSign} ><FcGoogle size={40}/></Button></div>
    </Paper>
    </Container>
    </motion.div>)
}