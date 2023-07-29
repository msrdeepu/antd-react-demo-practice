import React from "react";
import { Input, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Inputitem = () => {
  return (
    <>
      <Divider orientation="left">Inputs</Divider>
      <Input
        prefix={<UserOutlined />}
        maxLength={25}
        allowClear
        // disabled
        placeholder="Enter your name..."
      ></Input>
      <Divider orientation="left">Input Search</Divider>

      <Input.Search
        prefix={<UserOutlined />}
        maxLength={25}
        allowClear
        // disabled
        placeholder="Start Searching"
      ></Input.Search>
    </>
  );
};

export default Inputitem;
