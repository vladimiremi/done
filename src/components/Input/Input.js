import React from "react";
import InputMask from "react-input-mask";

const Input = (props) => (
  <InputMask className="input" placeholder="(86) 98100-0000" mask="(99) 99999-9999" value={props.value} onChange={props.onChange} />
);

export default Input;