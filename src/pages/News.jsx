import Section from '../components/ui/Section';

const News = () => (
  <div>
    <Section background="primary">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">News & Events</h1>
        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          Stay updated with the latest news, research breakthroughs, and upcoming events at Beacon University.
        </p>
      </div>
    </Section>
    
    <Section background="white">
      <Section.Header
        title="Latest Updates"
        description="Discover the latest developments in our research, academic programs, and campus community."
      />
      <div className="prose max-w-4xl mx-auto">
        <p>News and events content will be developed here...</p>
      </div>
    </Section>
  </div>
);

export default News;
