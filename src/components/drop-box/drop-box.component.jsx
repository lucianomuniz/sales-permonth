import './drop-box.styles.css';

const DropBox = ({ className, values, onChangeHandler, placeholder }) => (
  <div className={`drop-box ${className}`}>
    {placeholder}:
    <select onChange={onChangeHandler}>
      <option value=''> -- {placeholder} -- </option>
      {values.map((valueReg) => (
        <option key={valueReg.id} value={valueReg.value}>
          {valueReg.label}
        </option>
      ))}
    </select>
  </div>
);

export default DropBox;
