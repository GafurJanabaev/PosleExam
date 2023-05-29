import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Register.scss";

const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const registerFunction = () => {
    axios
      .post("http://todo.paydali.uz/api/register", state)
      .then((res) => {
        Swal.fire({
          title: "Successfuly",
          text: "Good",
          timer: 3000,
          icon: "success",
        });
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          title: "ERROR",
          text: "Siz aldin dizimnen otkensiz. Login tuymesin basip login parolinizdi jazin!!!",
          icon: "error",
          timer: 5000,
        });
      });
  };

  return (
    <div className="RegBody">
      <div className="Register">
        <h1>Register</h1>
        <Form className="Register__box">
          <h3>Name</h3>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              required
            />
          </Form.Item>
          <h3>Phone</h3>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              value={state.phone}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              required
            />
          </Form.Item>
          <h3>Password</h3>
          <Form.Item
            className="inpPas"
            name="password"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input.Password
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
              required
            />
          </Form.Item>
        </Form>
        <div className="Reg-btn">
          <Button onClick={registerFunction}>Submit</Button>
        </div>

        <div className="Link">
          Have already an account? <Link to="/login">Login Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
