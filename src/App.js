import { useState } from 'react';

import DropBox from './components/drop-box/drop-box.component';
import BarChart from './components/bar-chart/bar-chart.component';
import './App.css';

// TODO: Get data from API Routes
const categories = [
  { label: 'Food', value: 'Food', id: 1 },
  { label: 'Fruit', value: 'Fruit', id: 2 },
  { label: 'Garden', value: 'Garden', id: 3 },
];

const products = [
  { label: 'Chocolate', value: 'Chocolate', id: 1 },
  { label: 'Rice', value: 'Rice', id: 2 },
  { label: 'Beans', value: 'Beans', id: 3 },
];

const brands = [
  { label: 'Hershey', value: 'Hershey', id: 1 },
  { label: 'Lindt', value: 'Lindt', id: 2 },
  { label: 'Dove', value: 'Dove', id: 3 },
];

const selectedValues = {
  category: '',
  product: '',
  brand: '',
};

function App() {
  const [categoryField, setCategoryField] = useState('');
  const [productField, setProductField] = useState('');
  const [brandField, setBrandField] = useState('');

  const handleCategoryChange = (event) => {
    selectedValues.category = event.target.value;
    setCategoryField(event.target.value);
  };

  const handleProductChange = (event) => {
    selectedValues.product = event.target.value;
    setProductField(event.target.value);
  };

  const handleBrandChange = (event) => {
    selectedValues.brand = event.target.value;
    setBrandField(event.target.value);
  };

  const dropBoxComponents = [
    {
      className: 'category-box',
      values: categories,
      onChangeHandler: handleCategoryChange,
      placeholder: 'Select a Category',
      id: 1,
    },
    {
      className: 'product-box',
      values: products,
      onChangeHandler: handleProductChange,
      placeholder: 'Select a Product',
      id: 2,
    },
    {
      className: 'brand-box',
      values: brands,
      onChangeHandler: handleBrandChange,
      placeholder: 'Select a Brand',
      id: 3,
    },
  ];

  return (
    <div className='App'>
      {dropBoxComponents.map((dropBox) => {
        return (
          <DropBox
            key={dropBox.id}
            className={dropBox.className}
            values={dropBox.values}
            onChangeHandler={dropBox.onChangeHandler}
            placeholder={dropBox.placeholder}
          />
        );
      })}

      <BarChart values={selectedValues} />
    </div>
  );
}

export default App;
