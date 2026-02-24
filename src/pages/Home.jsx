import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Award, 
  Globe, 
  BookOpen,
  Microscope,
  Heart,
  Cpu,
  Atom,
  Calendar,
  ChevronRight
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  const stats = [
    { number: '15,000+', label: 'Students', icon: Users },
    { number: '500+', label: 'Faculty', icon: Award },
    { number: '50+', label: 'Countries', icon: Globe },
    { number: '200+', label: 'Programs', icon: BookOpen },
  ];

  const schools = [
    {
      name: 'Health Sciences',
      description: 'Leading medical education and healthcare innovation',
      icon: Heart,
      programs: ['Medicine', 'Nursing', 'Public Health', 'Pharmacy'],
      link: '/schools/health-sciences'
    },
    {
      name: 'Technology & Engineering',
      description: 'Cutting-edge technology and engineering solutions',
      icon: Cpu,
      programs: ['Computer Science', 'Engineering', 'AI & Robotics', 'Cybersecurity'],
      link: '/schools/technology'
    },
    {
      name: 'Natural & Applied Sciences',
      description: 'Advancing scientific knowledge and discovery',
      icon: Atom,
      programs: ['Biology', 'Chemistry', 'Physics', 'Environmental Science'],
      link: '/schools/sciences'
    }
  ];

  const researchHighlights = [
    {
      title: 'Cancer Research Breakthrough',
      description: 'Our team discovers new treatment pathway for aggressive cancers',
      image: '/api/placeholder/400/250',
      category: 'Health Sciences'
    },
    {
      title: 'AI-Powered Diagnostics',
      description: 'Revolutionary AI system improves medical diagnosis accuracy by 40%',
      image: '/api/placeholder/400/250',
      category: 'Technology'
    },
    {
      title: 'Climate Change Solutions',
      description: 'Innovative carbon capture technology developed in our labs',
      image: '/api/placeholder/400/250',
      category: 'Environmental Science'
    }
  ];

  const news = [
    {
      title: 'Beacon University Ranks #1 in Health Sciences',
      date: '2024-01-15',
      category: 'Rankings',
      excerpt: 'Latest international rankings place our health sciences programs at the top globally.'
    },
    {
      title: 'New $50M Research Center Opens',
      date: '2024-01-10',
      category: 'Campus News',
      excerpt: 'State-of-the-art facility will advance AI and biotechnology research.'
    },
    {
      title: 'International Partnership Announced',
      date: '2024-01-05',
      category: 'Partnerships',
      excerpt: 'Collaboration with leading European universities expands global reach.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="primary" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Advancing
              <span className="block text-secondary-300">Health, Science</span>
              <span className="block">& Technology</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join a world-class institution where innovation meets excellence. 
              Shape the future through groundbreaking research, exceptional education, 
              and global impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Explore Programs
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary-400 to-primary-300 rounded-full opacity-20 absolute -top-10 -right-10 w-96 h-96"></div>
            <div className="aspect-square bg-gradient-to-br from-primary-300 to-secondary-400 rounded-full opacity-30 absolute top-20 right-20 w-64 h-64"></div>
            <img 
              src="/api/placeholder/600/400" 
              alt="Campus Innovation" 
              className="relative z-10 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="white" padding="py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Schools Section */}
      <Section background="gray">
        <Section.Header
          subtitle="Academic Excellence"
          title="Our Schools & Departments"
          description="Discover world-class education across three premier schools, each dedicated to advancing knowledge and preparing future leaders."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {schools.map((school, index) => {
            const Icon = school.icon;
            return (
              <Card key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <Card.Title className="mb-4">{school.name}</Card.Title>
                <Card.Content className="mb-6">
                  <p className="mb-4">{school.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {school.programs.map((program, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {program}
                      </span>
                    ))}
                  </div>
                </Card.Content>
                <Card.Footer>
                  <Link to={school.link} className="text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center">
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Research Highlights */}
      <Section background="white">
        <Section.Header
          subtitle="Innovation & Discovery"
          title="Research Highlights"
          description="Breakthrough research that's changing the world and improving lives globally."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {researchHighlights.map((research, index) => (
            <Card key={index} className="overflow-hidden">
              <img 
                src={research.image} 
                alt={research.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-primary-600 font-medium">{research.category}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{research.title}</h3>
                <p className="text-gray-600">{research.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/research" className="btn-outline">
            View All Research
          </Link>
        </div>
      </Section>

      {/* News & Events */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="space-y-6">
              {news.map((item, index) => (
                <div key={index} className="border-l-4 border-primary-600 pl-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-primary-600 font-medium">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/news" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                View All News
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
            <Card>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 text-white rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-lg font-bold">25</div>
                    <div className="text-xs">JAN</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Research Symposium 2024</h4>
                    <p className="text-gray-600 text-sm">Annual showcase of groundbreaking research</p>
                    <p className="text-primary-600 text-sm">Main Auditorium • 9:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-600 text-white rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-lg font-bold">02</div>
                    <div className="text-xs">FEB</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">International Student Fair</h4>
                    <p className="text-gray-600 text-sm">Meet students and faculty from around the world</p>
                    <p className="text-primary-600 text-sm">Student Center • 10:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent-600 text-white rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-lg font-bold">15</div>
                    <div className="text-xs">FEB</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation Challenge Finals</h4>
                    <p className="text-gray-600 text-sm">Student teams compete for $100K in prizes</p>
                    <p className="text-primary-600 text-sm">Innovation Hub • 2:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
            <div className="mt-6">
              <Link to="/events" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                View All Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join our community of innovators, researchers, and leaders. 
            Take the first step towards an extraordinary education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Apply for Admission
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
              Schedule a Visit
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
              Partner with Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
