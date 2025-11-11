import React from 'react';
import clsx from 'clsx';

const baseStyles = 'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors';
const variantStyles = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
  ghost: 'bg-transparent text-primary-600 hover:bg-primary-50',
};

const Button = React.forwardRef(({ variant = 'primary', className, ...props }, ref) => (
  <button ref={ref} className={clsx(baseStyles, variantStyles[variant], className)} {...props} />
));

Button.displayName = 'Button';

export default Button;
