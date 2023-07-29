import React from "react";
import { Divider, Select } from "antd";

const Selectitem = () => {
  const cityList = ["Hyderabad", "Vizag", "Tirupati", "Guntur"];
  const selectCity = (city, index) => {
    return (
      <Select.Option key={index} value={city}>
        {city}
      </Select.Option>
    );
  };
  return (
    <>
      <Divider orientation="left">Select Component</Divider>
      <Select
        style={{ width: "50%" }}
        allowClear
        mode="multiple"
        maxTagCount={2}
        placeholder="Select City"
      >
        {cityList.map(selectCity)}
      </Select>
    </>
  );
};

export default Selectitem;
