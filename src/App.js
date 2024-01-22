import Heander from "./cards/Heander";
// import "./Style.css"
import {Route, Routes} from "react-router-dom";
import Home from "./cards/Home";
import Mainproduct from "./cards/Mainproduct"
import About from "./cards/About";
import Testimonial from "./cards/Testimonial";
import Blog from "./cards/Blog";
import Carddetails from "./Carddetails/Carddetails";
import Content from "./cards/Content";
import Navigate from "./Carddetails/Navigate";
import {useState} from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



function App() {
const [search,setsearch]=useState("")
console.log(search)
  const [darkmood, setdarkmood]=useState(true)
const darkTheme = createTheme({
  palette: {
    mode: darkmood ?'dark': "light",
  },
});

  return (
    <div className="App">
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Heander cheak={darkmood} change={()=>setdarkmood(!darkmood)} search={search} setsearch={setsearch}/>
      <Routes>
      <Route path="/Mainproduct" element={<Mainproduct search={search}/>} />
      <Route path="/" element={<Home search={search}/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Testimonail" element={<Testimonial/>}/>
      
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/content" element={<Content/>}/>
      <Route path="/cartdetails/:id" element={<Carddetails/>}/>
      <Route path="/buy" element={<Navigate/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
