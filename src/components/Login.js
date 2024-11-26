import React, { memo, useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { JumbotronWrapper } from "./common";
import "../Login.css";
function Login() {
  let [selected, setSelected] = useState([]);
  let history = useHistory();

  function handleChange(e) {
    const { options } = e.target;
    let selected = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelected(selected);
  }

  function handleClick() {
    localStorage.setItem("roles", JSON.stringify(selected));
    history.push("/app");
  }

  return (
    <div className="custom-login-container">
      <JumbotronWrapper
        className="custom-jumbotron"
        title="Login"
        description=""
      >
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Role:</Form.Label>
          <Form.Control
            as="select"
            value={selected}
            onChange={handleChange}
            multiple
          >
            TODO: Dynamic role options
            <option value="SUPER_ADMIN">SUPER_ADMIN</option>
            <option value="ADMIN">ADMIN</option>
            <option value="MANAGER">MANAGER</option>
            <option value="CUSTOMER">CUSTOMER</option>
            <option value="GUEST">GUEST</option>
          </Form.Control>
        </Form.Group>
        <Alert variant="primary">Support multi roles.</Alert>
        <div className="text-right">
          <Link to="/forgot-password">Forgot Password</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/register">Register</Link>
        </div>
        <Button
          className="login-page-login-button"
          variant="primary"
          onClick={handleClick}
          disabled={!selected.length}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid #d3d3d3",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Login
        </Button>
      </JumbotronWrapper>
    </div>
  );
}

export default memo(Login);
