import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage, LoginPage, SmsSchedullerPage} from "./pages";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Navigate to="login"/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="home" element={<HomePage/>}/>
          <Route path="sms-scheduller" element={<SmsSchedullerPage/>}/>
          <Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
  );
}

export default App;
