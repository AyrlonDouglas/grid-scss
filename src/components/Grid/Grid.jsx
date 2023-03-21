import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.module.scss';

export default function Grid(props) {
  const {
    children,
    className,
    container,
    spacing,
    xs,
    sm,
    md,
    lg,
    xl,
    justifyContent,
    alignItems,
    flexDirection,
    ...prop
  } = props;

  const handleClassName = () => {
    let nameStyle = '';

    if (container) {
      nameStyle += `${styles.container}`;
    } else {
      nameStyle += `${styles.item}`;
    }

    if (className) nameStyle += ` ${className}`;

    if (xs) nameStyle += ` ${styles[`xs-${xs}`]}`;

    if (sm) nameStyle += ` ${styles[`sm-${sm}`]}`;

    if (md) nameStyle += ` ${styles[`md-${md}`]}`;

    if (lg) nameStyle += ` ${styles[`lg-${lg}`]}`;

    if (xl) nameStyle += ` ${styles[`xl-${xl}`]}`;

    return nameStyle;
  };

  const varCSS = {
    ...(container
      ? { '--Grid-rowSpacing': `${spacing}px`, '--Grid-columnSpacing': `${spacing}px` }
      : {}),
    '--xs': xs,
    '--sm': sm,
    '--md': md,
    '--lg': lg,
    '--xl': xl,
    '--justifyContent': justifyContent,
    '--alignItems': alignItems,
    '--flexDirection': flexDirection
  };

  return (
    <div className={handleClassName()} {...prop} style={varCSS}>
      {children}
    </div>
  );
}
Grid.defaultProps = {
  spacing: 0,
  container: false,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'row'
};

Grid.propTypes = {
  container: PropTypes.bool,
  children: PropTypes.node,
  spacing: PropTypes.number,
  className: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'space-evenly',
    'baseline'
  ]),
  alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start']),
  flexDirection: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse', ''])
};
