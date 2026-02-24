import Section from '../components/ui/Section';

const StudentLife = () => (
  <div>
    <Section background="primary">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Student Life</h1>
        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          Experience a vibrant campus community with endless opportunities for growth, learning, and connection.
        </p>
      </div>
    </Section>
    
    <Section background="white">
      <Section.Header
        title="Campus Experience"
        description="From state-of-the-art facilities to diverse student organizations, discover what makes life at Beacon University extraordinary."
      />
      <div className="prose max-w-4xl mx-auto">
        <p>Student life content will be developed here...</p>
      </div>
    </Section>
  </div>
);

export default StudentLife;
