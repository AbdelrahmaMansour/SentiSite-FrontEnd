import React from "react";
import "./App.css";

import {
  Home,
  Signin,
  Signup,
  Inspiration,
  Profile,
  Analysis,
  Editprofile,
  Fpassword,
  Rpassword,
} from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App '>
      <Routes>
        <Route path='/' element={<Inspiration />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='profile' element={<Profile />} />
        <Route path='home' element={<Home />} />
        <Route path='analysis' element={<Analysis />} />
        <Route path='editprofile' element={<Editprofile />} />
        <Route path='f' element={<Fpassword />} />
        <Route path='r' element={<Rpassword />} />
      </Routes>
    </div>
  );
};

export default App;
