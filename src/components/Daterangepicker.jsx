import React from "react";

import { Divider, DatePicker, TimePicker } from "antd";

const Daterangepicker = () => {
  return (
    <>
      <Divider orientation="left">Date Picker</Divider>
      <DatePicker picker="month" />
      <DatePicker.RangePicker />
      <TimePicker />
      <TimePicker.RangePicker />
    </>
  );
};

export default Daterangepicker;
