import React from "react";
import { Divider, Spin } from "antd";

const Spincomponent = () => {
  return (
    <>
      <Divider orientation="left">Spin Component</Divider>
      <Spin spinning={true}></Spin>
    </>
  );
};

export default Spincomponent;
