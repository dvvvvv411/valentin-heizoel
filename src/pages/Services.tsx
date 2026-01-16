
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import DeliveryServiceSection from '../components/DeliveryServiceSection';
import AdditionalServicesSection from '../components/AdditionalServicesSection';
import QualityAssuranceSection from '../components/QualityAssuranceSection';
import ServiceContact from '../components/ServiceContact';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Valentin Heizöl Lieferservice | Deutschlandweite Heizöl-Lieferung</title>
        <meta name="description" content="Professioneller Heizöl-Lieferservice in ganz Deutschland. Tankwagenlieferung, Schlauchverlegung, Ölstandsmessung. Schnell, zuverlässig und sicher." />
      </Helmet>
      <Header />
      <ServiceHero />
      <DeliveryServiceSection />
      <AdditionalServicesSection />
      <QualityAssuranceSection />
      <ServiceContact />
      <Footer />
    </div>
  );
};

export default Services;
