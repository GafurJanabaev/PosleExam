import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../screens/Navbar/Navbar'
import axios from "axios";
import React, { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
          axios
            .get("http://todo.paydali.uz/api/getMe", {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
            .then((res) => {
              console.log(res, "GetMe");
            });
        } else if (!localStorage.getItem("token")) {
          navigate("/login", { replace: true });
        }
      }, []);
    
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout