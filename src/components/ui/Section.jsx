const Section = ({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'section-padding',
  container = true,
  ...props 
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'gradient-bg text-white',
    dark: 'bg-gray-900 text-white',
  };
  
  const classes = `${backgrounds[background]} ${padding} ${className}`;
  
  return (
    <section className={classes} {...props}>
      {container ? (
        <div className="container-custom">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  centered = true,
  className = '' 
}) => (
  <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
    {subtitle && (
      <p className="text-primary-600 font-medium text-sm uppercase tracking-wide mb-2">
        {subtitle}
      </p>
    )}
    {title && (
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
    )}
    {description && (
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    )}
  </div>
);

Section.Header = SectionHeader;

export default Section;
