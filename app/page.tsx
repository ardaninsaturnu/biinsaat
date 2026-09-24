import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyUs from '@/components/home/WhyUs';
import Process from '@/components/home/Process';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import Regions from '@/components/home/Regions';
import Team from '@/components/home/Team';
import Faq from '@/components/home/Faq';
import CtaBand from '@/components/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid limit={6} />
      <WhyUs />
      <Process />
      <ProjectsPreview />
      <Regions />
      <Team />
      <Faq />
      <CtaBand />
    </>
  );
}
