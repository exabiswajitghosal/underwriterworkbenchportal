import React from "react";
import { Form, Input } from "antd";
import "./FormInputFeild.css";
 
const FormInput = ({
  name,
  label,
  rules = [],
  value,
  required,
  defaultValue,
  placeholder = "",
  ...rest
}) => {
  return (
    
      <Form.Item
        name={name}
        label={label}
        className="label"
        rules={[
          ...(required
            ? [{ required: true, message: `Please enter ${name}!` }]
            : []),
          ...rules,
        ]}
      >
        <Input
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          {...rest}
          className= "input"
        />
      </Form.Item>
    
  );
};
 
export default FormInput;
 