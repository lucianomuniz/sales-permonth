import './bar-chart.styles.css';

// TODO Build the Bar-Chart component
const BarChart = ({ categories, products, brands }) => (
  <div>
    <div className='bar-chart'>
      Categories: {categories.map((category) => category.name + ' - ')}
    </div>
    <div className='bar-chart'>
      Products: {products.map((product) => product.name + ' - ')}
    </div>
    <div className='bar-chart'>
      Brands: {brands.map((brand) => brand.name + ' - ')}
    </div>
  </div>
);

export default BarChart;
