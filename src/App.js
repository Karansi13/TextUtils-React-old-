import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navabar from './components/Navabar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);  //set alert iss state ko change krne ka function hai
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been ebabled", "success");
      // document.title = 'TextUtils - Dark Mode'; //Just to know that this is also exist and we can do this!
      // setInterval(()=>{
      //   document.title = 'TextUtils is amazing mode'
      // },2000)
      // setInterval(()=>{
      //   document.title = 'Install TextUtils now'
      // },1500)
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been ebabled", "success")
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navabar title = "Textutils1"/>  */}
      {/* <Navabar/>  */}
      <Router>
        <Navabar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} Heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}>
              </Route> */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} Heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}>
            </Route>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

