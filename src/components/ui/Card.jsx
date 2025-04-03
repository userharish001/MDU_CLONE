import React from 'react';

const Card = ({ className = '', ...props }) => (
  <div
    className={`rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm ${className}`}
    {...props}
  />
);

const CardContent = ({ className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

const CardFooter = ({ className = '', ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
);

export { Card, CardContent, CardFooter };