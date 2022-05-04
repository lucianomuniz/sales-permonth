import { useState, useEffect } from 'react';

import ComboBox from './components/combo-box/combo-box.component';
import BarChart from './components/bar-chart/bar-chart.component';
import './App.css';

// TODO: Get data from API Routes
const categories = [{ name: 'Food' }, { name: 'Fruit' }, { name: 'Garden' }];
const products = [{ name: 'Chocolate' }, { name: 'Rice' }, { name: 'Beans' }];
const brands = [{ name: 'Hershey' }, { name: 'Lindt' }, { name: 'Dove' }];

function App() {
  const [categorySearchField, setCategorySearchField] = useState('');
  const [productSearchField, setProductSearchField] = useState('');
  const [brandSearchField, setBrandSearchField] = useState('');

  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filteredBrands, setFilteredBrands] = useState(brands);

  // Category
  useEffect(() => {
    const newFilteredCategories = categories.filter((category) => {
      return category.name.toLocaleLowerCase().includes(categorySearchField);
    });

    setFilteredCategories(newFilteredCategories);
  }, [categories, categorySearchField]);

  // Product
  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      return product.name.toLocaleLowerCase().includes(productSearchField);
    });

    setFilteredProducts(newFilteredProducts);
  }, [products, productSearchField]);

  // Brands
  useEffect(() => {
    const newFilteredBrands = brands.filter((brand) => {
      return brand.name.toLocaleLowerCase().includes(brandSearchField);
    });

    setFilteredBrands(newFilteredBrands);
  }, [brands, brandSearchField]);

  const onCategoryChange = (event) => {
    const categoryFieldString = event.target.value.toLocaleLowerCase();
    setCategorySearchField(categoryFieldString);
  };

  const onProductChange = (event) => {
    const productFieldString = event.target.value.toLocaleLowerCase();
    setProductSearchField(productFieldString);
  };

  const onBrandChange = (event) => {
    const brandFieldString = event.target.value.toLocaleLowerCase();
    setBrandSearchField(brandFieldString);
  };

  return (
    <div className='App'>
      <ComboBox
        className='category-search-box'
        onChangeHandler={onCategoryChange}
        placeholder='categories'
      />

      <ComboBox
        className='product-search-box'
        onChangeHandler={onProductChange}
        placeholder='products'
      />

      <ComboBox
        className='brand-search-box'
        onChangeHandler={onBrandChange}
        placeholder='brands'
      />

      <BarChart
        categories={filteredCategories}
        products={filteredProducts}
        brands={filteredBrands}
      />
    </div>
  );
}

export default App;
