import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

const Product = ({name, title, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  //console.log(currentColor, currentSize);

  const clickedSize = sizeName => {
    if(sizeName !== currentSize) {
      //console.log(sizeName);
      setCurrentSize(sizeName);
    }
  };

  const clickedColor = colorName => {
    if(colorName !== currentColor) {
      //console.log(colorName);
      setCurrentColor(colorName);
    }
  };


  const price = useMemo(() => {
    let sizeFound = sizes.find((element) => element.name === currentSize);
    //console.log('found', sizeFound);

    let priceToAdd = sizeFound.additionalPrice;
    //console.log('priceAdd', priceToAdd);

    const finalPrice = basePrice + priceToAdd;
    //console.log('final',finalPrice);
    
    return finalPrice;
  }, [currentSize]);

  const cartSummary = event => {
    event.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log('Name:', title);
    console.log('Price:', price);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm 
          colors={colors} 
          sizes={sizes} 
          currentColor={currentColor} 
          currentSize={currentSize} 
          clickedSize={clickedSize}
          clickedColor={clickedColor}
          cartSummary={cartSummary}
          />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;