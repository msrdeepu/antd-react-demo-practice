import React, { useState } from "react";
import { Button, Space, Divider } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";

const ButtonItem = () => {
  const [loading, setLoading] = useState(false);

  const onClickHandler = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <Divider orientation="left">Buttons</Divider>
      <Button
        onClick={onClickHandler}
        loading={loading}
        type="primary"
        shape="round"
        icon={<DownCircleOutlined />}
      >
        My Button
      </Button>
    </>
  );
};

export default ButtonItem;
