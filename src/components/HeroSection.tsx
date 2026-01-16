
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PriceCalculator from './PriceCalculator';
import MobilePriceCalculator from './MobilePriceCalculator';

const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('price-calculator');
    calculatorElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-200/40 to-primary-300/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-accent-orange-200/30 to-accent-orange-100/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-tl from-primary-100/40 to-primary-200/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#006b51 1px, transparent 1px), linear-gradient(90deg, #006b51 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 pt-16 pb-16 lg:pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[75vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent-orange-50 to-accent-orange-100/80 text-accent-orange-700 rounded-full text-sm font-semibold border border-accent-orange-200/50 shadow-sm backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>Heizöl-Experte seit über 20 Jahren</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Heizöl günstig
                <br />
                <span className="gradient-text-premium">bestellen</span>
                <br />
                <span className="text-gray-700">Deutschlandweit</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
                Kostenlose Lieferung in Deutschland • <span className="text-accent-orange-600 font-bold">Ab 60 Cent pro Liter</span> • Schnell & zuverlässig
              </p>
            </div>

            {/* Premium USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { text: 'Kostenlose Lieferung ab 1500 Liter', highlight: true },
                { text: 'Lieferung in 4-7 Werktagen', highlight: false },
                { text: 'Geprüfte Premium-Qualität', highlight: false },
                { text: 'Über 100.000 zufriedene Kunden', highlight: true }
              ].map((usp, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-soft transition-all duration-300 hover:shadow-medium hover:border-primary-200/50"
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${usp.highlight ? 'bg-accent-orange-100' : 'bg-primary-100'}`}>
                    <CheckCircle className={`w-4 h-4 ${usp.highlight ? 'text-accent-orange-600' : 'text-primary-600'}`} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm lg:text-base">{usp.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={scrollToCalculator}
                className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-premium hover:shadow-glow-primary rounded-xl group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Preis berechnen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>

            {/* CTA Buttons - Mobile */}
            <div className="lg:hidden space-y-4">
              <Button 
                onClick={scrollToCalculator}
                className="w-full relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white py-5 text-lg font-semibold min-h-[56px] rounded-xl shadow-premium group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Preis berechnen
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200/50">
              <p className="text-sm text-gray-500 mb-5 font-medium">Vertrauen Sie auf über 20 Jahre Erfahrung</p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '100.000+', label: 'Zufriedene Kunden', color: 'text-accent-orange-600' },
                  { value: '20+', label: 'Jahre Erfahrung', color: 'text-primary-600' },
                  { value: '24h', label: 'Service', color: 'text-accent-orange-600' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-2xl lg:text-3xl font-bold ${stat.color} transition-transform duration-300 group-hover:scale-110`}>
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Price Calculators */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div id="price-calculator" className="relative">
              {/* Glow effect behind calculator */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200/20 via-accent-orange-200/20 to-primary-200/20 rounded-3xl blur-2xl opacity-60" />
              
              {/* Desktop Calculator */}
              <div className="hidden lg:block relative">
                <PriceCalculator />
              </div>
              {/* Mobile Calculator */}
              <div className="lg:hidden relative">
                <MobilePriceCalculator />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Mehr entdecken</span>
        <div className="w-6 h-10 border-2 border-primary-300/50 rounded-full flex justify-center p-1 backdrop-blur-sm bg-white/30">
          <div className="w-1.5 h-3 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
