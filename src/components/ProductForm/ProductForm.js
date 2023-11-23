import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


const ProductForm = ({ colors, sizes, currentColor, currentSize, clickedSize, clickedColor, cartSummary}) => {
    

    const prepareColorClassName = colorName => {
        return styles['color' + colorName[0].toUpperCase() + colorName.substr(1).toLowerCase()];
      };

      console.log(prepareColorClassName);

    return(
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
    );
};

ProductForm.propTypes = {
    prepareColorClassName: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
}
export default ProductForm;