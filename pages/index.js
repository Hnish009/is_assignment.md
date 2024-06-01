import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import data from '../public/data.json';

export default function Home() {
  return (
    <div>
      <Hero {...data.hero} />
      <Features features={data.features} />
      <Testimonials testimonials={data.testimonials} />
      <Pricing pricing={data.pricing} />
      <Contact />
    </div>
  );
}
