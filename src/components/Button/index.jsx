import classNames from 'classnames'
import React from 'react'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'

const Button = ({ as, className, primary, brand, watermelon, theme, ...props }) => {
	const Tag = as
  return (
    <Tag className={classNames(styles.button, styles[theme], className, {
      [styles.primary]: primary,
      [styles.brand]: brand,
      [styles.watermelon]: watermelon
    })} {...props} />
  )
}

Button.defaultProps= {
  as: 'button',
  theme: 'rounded'
}

Button.propTypes = {
  theme: PropTypes.oneOf(['rounded', 'droplet']),
};

export default Button