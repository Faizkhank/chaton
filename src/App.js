import { BrowserRouter, Routes, Route} from "react-router-dom";
import Auth from './component/Auth';
import {AnimatePresence} from 'framer-motion';
import Main from './component/Main';
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./component/Protected";
import Navbar from "./component/Navbar";
import { ContextProvider } from './Services/services';
import Conference from "./component/conference";

function App() {
  return (<BrowserRouter>
  <AuthContextProvider>
  <ContextProvider>
  <AnimatePresence>
   <Routes>
    <Route path='/' element={<Conference/>}></Route>
    <Route path='/main' element={<Protected><Navbar/><Main/></Protected>}></Route>
   </Routes>
   </AnimatePresence>
   </ContextProvider>
   </AuthContextProvider>
  </BrowserRouter>);
}

export default App;
