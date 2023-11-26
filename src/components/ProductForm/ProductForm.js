import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';


const ProductForm = ({ colors, sizes, currentColor, currentSize, clickedSize, clickedColor, cartSummary}) => {
    

    const prepareColorClassName = colorName => {
        return styles['color' + colorName[0].toUpperCase() + colorName.substr(1).toLowerCase()];
      };

      //console.log(prepareColorClassName);

    return(
      <form>
        <OptionSize sizes={sizes} currentSize={currentSize} clickedSize={clickedSize} />
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
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired, 
    currentSize: PropTypes.string.isRequired,
    clickedSize: PropTypes.func.isRequired,
    clickedColor: PropTypes.func.isRequired,
    cartSummary: PropTypes.func.isRequired
}

export default ProductForm;