// import UserCrud from "./components/UserCrud";
// import Deneme from "./components/Deneme";
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup"
import HomePage from "./components/HomePage";
import Demo from "./components/demo";
import Meet from "./components/Meet";

function App(){
  return(
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
   </BrowserRouter> 
  )
}
export default App;

// function App(){
//   return(
//     <div>
//       <Signup/>
//     </div>
//   );
// }
// export default App;