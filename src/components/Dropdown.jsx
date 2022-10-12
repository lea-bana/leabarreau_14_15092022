export default function Dropdown({
  className,
  id,
  label,
  select,
  handleChange,
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      <select className="dropdownList" id={id} onChange={handleChange} required>
        {select.map((item) => (
          <option
            title="dropdownOption"
            type="text"
            value={item.value}
            key={item.abbrev}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
