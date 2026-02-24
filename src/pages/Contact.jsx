import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => (
  <div>
    <Section background="primary">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          Get in touch with our admissions team, faculty, or support staff. We're here to help you succeed.
        </p>
      </div>
    </Section>
    
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>General Inquiry</option>
                <option>Admissions</option>
                <option>Research</option>
                <option>Student Services</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
            </div>
            <Button size="lg" className="w-full">Send Message</Button>
          </form>
        </div>
        
        <div className="space-y-8">
          <Card>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Campus Address</h3>
                <p className="text-gray-600">123 University Avenue<br />Science City, SC 12345<br />United States</p>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                <p className="text-gray-600">Main: +1 (555) 123-4567<br />Admissions: +1 (555) 123-4568<br />Emergency: +1 (555) 123-4569</p>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Addresses</h3>
                <p className="text-gray-600">General: info@beacon.university<br />Admissions: admissions@beacon.university<br />Research: research@beacon.university</p>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  </div>
);

export default Contact;
