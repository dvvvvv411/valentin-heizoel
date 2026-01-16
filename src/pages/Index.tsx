
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import ReviewsSection from '../components/ReviewsSection';
import CompanySection from '../components/CompanySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Valentin Heizöl - Heizöl deutschlandweit günstig bestellen | Ab 60 Cent/L</title>
        <meta name="description" content="✓ Heizöl deutschlandweit ab 60 Cent/Liter ✓ Kostenlose Lieferung ab 500L ✓ Premium-Qualität ✓ Schnelle Lieferung in 2-3 Werktagen ✓ Jetzt Preis berechnen!" />
      </Helmet>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ReviewsSection />
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;
