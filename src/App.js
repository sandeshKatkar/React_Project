//import logo from './logo.svg';
import React,{ useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
  const [modeAbout ,setModeAbout]=useState('light');
  const [modeText , setModeText]=useState('switch to dark mode');
  // const[Alert, setAlert]=useState(null);

  // const showAlert=(msg,type)=>{
  //   // setAlert({
  //   //   messege:msg,
  //   //   type:type
  //   // })
  //   if(msg && type){
  //     alert({type} +":"+{msg}); 
  //   }
  //   setTimeout(()=>{
      
  //   },1500)

  // }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      setModeAbout('dark');
      document.body.style.backgroundColor="rgb(10, 9, 71)";
      setModeText('switch to light mode');
      // showAlert("dark mode enabled","success");
    }
    else{
      setMode('light');
      setModeAbout('light');
      document.body.style.backgroundColor="white";
      setModeText('switch to dark mode');
      // showAlert("Light mode enabled","success");
    }
  }
  return (
    <>
      {/* <TextForm heading="Enter the Text Below" mode={mode} showAlert={showAlert}/> */}
                {/* <About modeAbout={modeAbout}/>  */}
      <Router>
          <Navbar titel="TextUtile" mode={mode} toggleMode={toggleMode} modeText={modeText} />
          {/* <Alert alert={alert}/> */}
          <div className="my-2 mx-5">
                <Switch>
                  <Route exact path="/about" element={<About modeAbout={modeAbout}/>}>
                  </Route>
                  <Route exact path="/" element={<TextForm heading="Enter the Text Below" mode={mode} />}>                 
                  </Route>
                </Switch>   


                 
          </div>
      </Router>

     
    </>
    
    // showAlert={showAlert}
  );
}

export default App;
