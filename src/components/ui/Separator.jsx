import React from 'react';

const Separator = ({
  className = '',
  orientation = 'horizontal',
  decorative = false,
  ...props
}) => {
  if (decorative) {
    return null; // or you can return a decorative separator if needed
  }

  const orientationClasses = {
    horizontal: 'w-full h-px my-4',
    vertical: 'h-full w-px mx-4',
  };

  return (
    <hr
      className={`shrink-0 bg-gray-200 border-none ${orientationClasses[orientation]} ${className}`}
      {...props}
    />
  );
};

export { Separator };