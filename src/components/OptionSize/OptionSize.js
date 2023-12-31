import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, currentSize, clickedSize}) => {
    return (
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
    );
};

OptionSize.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    clickedSize: PropTypes.func.isRequired
}

export default OptionSize;