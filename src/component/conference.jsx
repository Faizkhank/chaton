import React from "react";
import { io } from 'socket.io-client';

export default function Conference()
{
    const socket = io('http://192.168.1.51:3000');
    socket.on("connection", (socket) => {
        socket.join("some room");

      });
    socket.to("connectToRoom").emit("hello");
    console.log(socket.on('connectToRoom',function(data)
    {
    console.log(data)
    }));
    return(
        <div>
        </div>
    )
}