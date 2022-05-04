import './combo-box.styles.css';

// TODO: Build a Combo-Box (select) component
const ComboBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`combo-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default ComboBox;
