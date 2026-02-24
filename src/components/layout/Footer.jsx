import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Academic Programs', href: '/schools' },
    { name: 'Research', href: '/research' },
    { name: 'Student Life', href: '/student-life' },
    { name: 'News & Events', href: '/news' },
  ];

  const academicLinks = [
    { name: 'Health Sciences', href: '/schools/health-sciences' },
    { name: 'Technology & Engineering', href: '/schools/technology' },
    { name: 'Natural & Applied Sciences', href: '/schools/sciences' },
    { name: 'Graduate Programs', href: '/admissions/graduate' },
    { name: 'Research Centers', href: '/research/centers' },
    { name: 'Innovation Labs', href: '/research/labs' },
  ];

  const supportLinks = [
    { name: 'Student Portal', href: '/portal' },
    { name: 'Library', href: '/library' },
    { name: 'Career Services', href: '/careers' },
    { name: 'Financial Aid', href: '/admissions/financial-aid' },
    { name: 'IT Support', href: '/support' },
    { name: 'Campus Safety', href: '/safety' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-600">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-primary-100 mb-6">
              Get the latest news, research updates, and campus events delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Beacon University</h3>
                <p className="text-sm text-gray-400">Health • Science • Technology</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              A world-class institution dedicated to advancing health, science, and technology 
              through innovative education, groundbreaking research, and global partnerships.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">123 University Ave, Science City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">info@beacon.university</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Academic</h4>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Beacon University. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
