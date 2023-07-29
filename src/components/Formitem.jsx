import React, { useState } from "react";
import { Divider, Form, Input, Button, message, Alert } from "antd";

//Message and alert also included in this Component

const Formitem = () => {
  const [showAlert, setShowAlert] = useState(false);
  const finishHandler = (e) => {
    console.log(e);
    setTimeout(() => {
      setShowAlert(true);
      message.success("Login Success", 2);
      //   message.error("Login Failed", 2);
    }, 1000);
  };
  return (
    <>
      <Divider orientation="left">Form Component</Divider>
      {showAlert && (
        <Alert
          type="error"
          message="Error"
          description="Some Error Occured"
          closable
        />
      )}
      <Form onFinish={finishHandler} style={{ width: "50%" }}>
        <Form.Item label="Usename" required name="username">
          <Input placeholder="username"></Input>
        </Form.Item>
        <Form.Item label="Enter Password" name="password">
          <Input.Password placeholder="Enter Password"></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Formitem;
