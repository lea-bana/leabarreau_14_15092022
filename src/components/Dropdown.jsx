import React from "react";

export function DropdownS({
  className,
  labelFor,
  label,
  options,
  onChangeFunction,
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      <label htmlFor={labelFor}>{label}</label>
      <select
        className="dropdownList"
        name="state"
        onChange={(e) => onChangeFunction(e.target.value)}
        required
      >
        {options.map((item) => (
          <option
            title="dropdownOption"
            type="text"
            value={item.abbreviation}
            key={item.abbreviation}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export function DropdownD({
  className,
  labelFor,
  label,
  options,
  onChangeFunction,
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      <label htmlFor={labelFor}>{label}</label>
      <select
        className="dropdownList"
        name="department"
        onChange={(e) => onChangeFunction(e.target.value)}
        required
      >
        {options.map((item) => (
          <option title="dropdownOption" type="text" value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
