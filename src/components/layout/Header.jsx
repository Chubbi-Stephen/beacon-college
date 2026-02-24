import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Mission & Vision', href: '/about/mission' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Accreditation', href: '/about/accreditation' },
        { name: 'History', href: '/about/history' },
      ]
    },
    {
      name: 'Schools',
      href: '/schools',
      dropdown: [
        { name: 'Health Sciences', href: '/schools/health-sciences' },
        { name: 'Technology & Engineering', href: '/schools/technology' },
        { name: 'Natural & Applied Sciences', href: '/schools/sciences' },
      ]
    },
    {
      name: 'Research',
      href: '/research',
      dropdown: [
        { name: 'Research Centers', href: '/research/centers' },
        { name: 'Projects & Publications', href: '/research/projects' },
        { name: 'Innovation Labs', href: '/research/labs' },
      ]
    },
    {
      name: 'Admissions',
      href: '/admissions',
      dropdown: [
        { name: 'Undergraduate', href: '/admissions/undergraduate' },
        { name: 'Graduate', href: '/admissions/graduate' },
        { name: 'International', href: '/admissions/international' },
        { name: 'Financial Aid', href: '/admissions/financial-aid' },
      ]
    },
    { name: 'Student Life', href: '/student-life' },
    { name: 'News & Events', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Beacon University</h1>
              <p className="text-sm text-gray-600">Health • Science • Technology</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/apply" className="btn-outline">
              Apply Now
            </Link>
            <Link to="/portal" className="btn-primary">
              Student Portal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-1 px-4 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <Link
                to="/apply"
                className="block w-full text-center btn-outline"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
              <Link
                to="/portal"
                className="block w-full text-center btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Student Portal
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
