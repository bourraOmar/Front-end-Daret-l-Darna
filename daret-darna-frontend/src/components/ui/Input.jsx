import React from 'react';
import clsx from 'clsx';

const baseStyles = 'block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500';

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={clsx(baseStyles, className)} {...props} />
));

Input.displayName = 'Input';

export default Input;
