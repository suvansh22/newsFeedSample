import { useState } from "react";
import "./index.css";

export default function Select({ placeholder = "select", options = [] }) {
  const [value, setValue] = useState("everything");
  return (
    <div className="floatingLabelSelect rounded-3 p-md-2 p-1">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        className="customSelect fw-semibold"
        id="showSelect"
      >
        <option value="" hidden></option>
        {options.map(([item, value]) => (
          <option className="fw-semibold" value={value}>
            {item}
          </option>
        ))}
      </select>
      <label className="labelSelect fw-semibold" htmlFor="showSelect">
        {placeholder}
      </label>
    </div>
  );
}
