import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import TargetAudience from '@/components/TargetAudience';
import ProductPreview from '@/components/ProductPreview';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <ProductPreview />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
