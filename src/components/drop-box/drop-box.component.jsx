import './drop-box.styles.css';

// TODO: Build a Combo-Box (select) component
const DropBox = ({ className, values, onChangeHandler, placeholder }) => (
  <div className={`drop-box ${className}`}>
    {placeholder}:
    <select onChange={onChangeHandler}>
      <option value=''> -- Select a {placeholder} -- </option>
      {values.map((valueReg) => (
        <option key={valueReg.id} value={valueReg.value}>
          {valueReg.label}
        </option>
      ))}
    </select>
  </div>
);

// (
//   <div>
//     {placeholder}:
//     <select
//       className={`drop-box ${className}`}
//       onChange={onChangeHandler}>
//       <option value="">-- Select a {placeholder}</option>

//       {
//         values.map((valueReg) => {
//           <option key={valueReg.id} value={valueReg.value}>{valueReg.label}</option>
//         })
//       }

//       </select>
//     />
//   </div>
// );

export default DropBox;
