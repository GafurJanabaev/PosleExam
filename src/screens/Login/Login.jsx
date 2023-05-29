import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchLogin } from "../../store/reducer/login.Slice";
import "./Login.scss";
const Login = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    phone: "",
    password: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://todo.paydali.uz/api/getMe", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        navigate("/login", { replace: true });
      });
  }, [localStorage.getItem("token")]);

  const loginFunc = () => {
    axios
      .post("http://todo.paydali.uz/public/api/login", loginUser)
      .then((res) => {
        Swal.fire({
          title: "Successfuly",
          icon: "success",
          text: "Good",
          timer: 3000,
        });
        dispatch(fetchLogin());
        localStorage.setItem("token", res.data.payload.token);
        navigate("/", { replace: true });
        console.log(res.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "ERROR",
          icon: "error",
          text: "Login yaki Paroliniz qate. Iltimas qaytadan korin!!!",
          timer: 4000,
        });
      });
  };

  return (
    <div className="LogBody">
      <div className="Login">
        <h1>Login</h1>
        <Form className="Login__box">
          <h3>Phone</h3>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              value={loginUser.value}
              onChange={(e) =>
                setLoginUser({ ...loginUser, phone: e.target.value })
              }
              required
            />
          </Form.Item>
          <h3>Password</h3>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input.Password className="inpPas"
              value={loginUser.password}
              onChange={(e) =>
                setLoginUser({ ...loginUser, password: e.target.value })
              }
              required
            />
          </Form.Item>
        </Form>
        <div className="Log-btn">
          <Button onClick={loginFunc}>Submit</Button>
        </div>

        <div className="Link">
          Don't have an account? <Link to="/register">Register Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
