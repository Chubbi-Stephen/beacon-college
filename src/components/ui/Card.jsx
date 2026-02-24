const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${padding} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`text-gray-600 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
