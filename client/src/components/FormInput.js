const FormInput = (props) => {
  const { type, label, id, value, onChange, ...customAttributes } = props
  const handleChange = (e) => {
    onChange(e.target.value);
  }

  return ( 
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        {...customAttributes}
      />
    </div>
   );
}
 
export default FormInput;