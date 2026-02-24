import { Routes, Route } from 'react-router-dom';
import Section from '../components/ui/Section';

const Schools = () => {
  return (
    <Routes>
      <Route path="/" element={<SchoolsMain />} />
      <Route path="/health-sciences" element={<HealthSciences />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/sciences" element={<Sciences />} />
    </Routes>
  );
};

const SchoolsMain = () => (
  <div>
    <Section background="primary">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Schools & Departments</h1>
        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          Explore our three premier schools offering world-class education and research opportunities.
        </p>
      </div>
    </Section>
    
    <Section background="white">
      <Section.Header
        title="Academic Excellence"
        description="Our schools are recognized globally for their innovative programs, distinguished faculty, and cutting-edge research."
      />
    </Section>
  </div>
);

const HealthSciences = () => (
  <Section background="white">
    <Section.Header title="School of Health Sciences" />
    <div className="prose max-w-4xl mx-auto">
      <p>Health Sciences programs and faculty information will be developed here...</p>
    </div>
  </Section>
);

const Technology = () => (
  <Section background="white">
    <Section.Header title="School of Technology & Engineering" />
    <div className="prose max-w-4xl mx-auto">
      <p>Technology and Engineering programs will be developed here...</p>
    </div>
  </Section>
);

const Sciences = () => (
  <Section background="white">
    <Section.Header title="School of Natural & Applied Sciences" />
    <div className="prose max-w-4xl mx-auto">
      <p>Natural and Applied Sciences programs will be developed here...</p>
    </div>
  </Section>
);

export default Schools;
