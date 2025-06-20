import Post from "./components/Post";
import Header from "./components/Header";
import QRCodeGenerator from "./components/qr-code-generator";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPages";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  
  return(

    <Routes>

      <Route path="/" element={<Layout/>}>

          <Route index element = {<IndexPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          
        </Route>

    </Routes>


  );

}

export default App
