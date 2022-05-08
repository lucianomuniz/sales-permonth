import './bar-chart.styles.css';

// TODO Build the Bar-Chart component
const BarChart = ({ values }) => (
  <div>
    <div className='bar-chart'>Category selected: {values.category}</div>
    <div className='bar-chart'>Product selected: {values.product}</div>
    <div className='bar-chart'>Brand selected: {values.brand}</div>
  </div>
);

export default BarChart;
