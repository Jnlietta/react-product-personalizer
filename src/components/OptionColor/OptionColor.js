import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({ colors, currentColor, clickedColor }) => {

    const prepareColorClassName = colorName => {
        return styles['color' + colorName[0].toUpperCase() + colorName.substr(1).toLowerCase()];
      };

      //console.log(prepareColorClassName);

    return (
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
    );
};

OptionColor.propTypes ={
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired, 
    clickedColor: PropTypes.func.isRequired
}

export default OptionColor;
