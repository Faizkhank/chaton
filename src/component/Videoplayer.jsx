import React from 'react';
import { useContext} from 'react';
import { SocketContext } from '../Services/services';
import { FcEndCall } from 'react-icons/fc';
import './style.css';

const Video = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, leaveCall ,me} = useContext(SocketContext);
  const style ={
    padding:10,
    borderRadius:10,
    width:"80%"
  }
  const styles =
  {
    position:'relative',
    zIndex:1,
    padding:10,
    borderRadius:10,
    width:"15%",
    bottom:"42%",
    left:"-16.5%"
  }
  return (
    <div style={{ width:'80%'}}>
    {callAccepted && !callEnded && (<video style={{ width:'80%',height:'auto',borderRadius:10,margin:10}} playsInline autoPlay ref={userVideo}/>)}
    <video playsInline autoPlay muted ref={myVideo} style={callAccepted?styles:style} />
    </div>
  )
}
export default Video;