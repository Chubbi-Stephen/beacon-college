import { Routes, Route } from 'react-router-dom';
import Section from '../components/ui/Section';

const About = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMain />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/accreditation" element={<Accreditation />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

const AboutMain = () => (
  <div>
    <Section background="primary">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">About Beacon University</h1>
        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          A world-class institution dedicated to advancing health, science, and technology 
          through innovative education, groundbreaking research, and global partnerships.
        </p>
      </div>
    </Section>
    
    <Section background="white">
      <Section.Header
        title="Our Mission"
        description="To educate the next generation of leaders and innovators while conducting research that addresses the world's most pressing challenges in health, science, and technology."
      />
    </Section>
  </div>
);

const Mission = () => (
  <Section background="white">
    <Section.Header title="Mission & Vision" />
    <div className="prose max-w-4xl mx-auto">
      <p>Our mission content will be developed here...</p>
    </div>
  </Section>
);

const Leadership = () => (
  <Section background="white">
    <Section.Header title="Leadership Team" />
    <div className="prose max-w-4xl mx-auto">
      <p>Leadership profiles will be developed here...</p>
    </div>
  </Section>
);

const Accreditation = () => (
  <Section background="white">
    <Section.Header title="Accreditation & Partnerships" />
    <div className="prose max-w-4xl mx-auto">
      <p>Accreditation information will be developed here...</p>
    </div>
  </Section>
);

const History = () => (
  <Section background="white">
    <Section.Header title="History & Milestones" />
    <div className="prose max-w-4xl mx-auto">
      <p>University history will be developed here...</p>
    </div>
  </Section>
);

export default About;
