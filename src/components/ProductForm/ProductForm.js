import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';


const ProductForm = ({ colors, sizes, currentColor, currentSize, clickedSize, clickedColor, cartSummary}) => {

    return(
      <form>
        <OptionSize sizes={sizes} currentSize={currentSize} clickedSize={clickedSize} />
        <OptionColor colors={colors} currentColor={currentColor} clickedColor={clickedColor} />
        <Button className={styles.button} onClick={cartSummary}>
          <span className="fa fa-shopping-cart"/>
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