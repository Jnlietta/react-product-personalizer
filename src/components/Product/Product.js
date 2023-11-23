import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({name, title, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  //console.log(currentColor, currentSize);

  const prepareColorClassName = colorName => {
    return styles['color' + colorName[0].toUpperCase() + colorName.substr(1).toLowerCase()];
  };

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

  const getPrice = () => {
    let sizeFound = sizes.find((element) => element.name === currentSize);
    //console.log('found', sizeFound);

    let priceToAdd = sizeFound.additionalPrice;
    //console.log('priceAdd', priceToAdd);

    const finalPrice = basePrice + priceToAdd;
    //console.log('final',finalPrice);
    
    return finalPrice; 
  };

  const cartSummary = event => {
    event.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => 
                <li key={size.name}>
                  <button type="button" className={clsx(size.name === currentSize && styles.active)}  onClick={() => clickedSize(size.name)}>{size.name}</button>
                </li>
              )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => 
                <li key={color}>
                  <button type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={() => clickedColor(color)}/>
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" onClick={cartSummary} />
          </Button>
        </form>
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