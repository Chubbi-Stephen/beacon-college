import Section from '../components/ui/Section';

const Admissions = () => (
  <div>
    <Section background="primary">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Admissions</h1>
        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          Join our community of scholars, researchers, and innovators from around the world.
        </p>
      </div>
    </Section>
    
    <Section background="white">
      <Section.Header
        title="Start Your Journey"
        description="Discover the admission requirements and application process for undergraduate, graduate, and international students."
      />
      <div className="prose max-w-4xl mx-auto">
        <p>Admissions content will be developed here...</p>
      </div>
    </Section>
  </div>
);

export default Admissions;
