import Section from '../components/ui/Section';

const Research = () => (
  <div>
    <Section background="primary">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Research & Innovation</h1>
        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          Groundbreaking research that addresses global challenges and advances human knowledge.
        </p>
      </div>
    </Section>
    
    <Section background="white">
      <Section.Header
        title="Research Excellence"
        description="Our research centers and labs are at the forefront of scientific discovery and technological innovation."
      />
      <div className="prose max-w-4xl mx-auto">
        <p>Research content will be developed here...</p>
      </div>
    </Section>
  </div>
);

export default Research;
