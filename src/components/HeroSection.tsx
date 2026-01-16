import { CheckCircle, Sparkles, Users, Award, Headphones } from 'lucide-react';
import HorizontalPriceCalculator from './HorizontalPriceCalculator';
import MobilePriceCalculator from './MobilePriceCalculator';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-200/40 to-primary-300/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-accent-orange-200/30 to-accent-orange-100/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-tl from-primary-100/40 to-primary-200/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#e03c20 1px, transparent 1px), linear-gradient(90deg, #e03c20 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* ============ UPPER SECTION (50vh) ============ */}
      <div className="relative z-10 min-h-[50vh] flex items-center">
        <div className="container mx-auto px-4 py-12 lg:py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Badge, Headline, Subheadline */}
            <div className="space-y-6 animate-fade-in">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent-orange-50 to-accent-orange-100/80 text-accent-orange-700 rounded-full text-sm font-semibold border border-accent-orange-200/50 shadow-sm backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>Heizöl-Experte seit über 20 Jahren</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Heizöl günstig
                <br />
                <span className="gradient-text-premium">bestellen</span>
                <br />
                <span className="text-gray-700">Deutschlandweit</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
                Kostenlose Lieferung in Deutschland • <span className="text-primary-600 font-bold">Ab 60 Cent pro Liter</span> • Schnell & zuverlässig
              </p>
            </div>

            {/* Right Column: USP Grid + Trust Stats */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {/* USP Grid 2x2 */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { text: 'Kostenlose Lieferung ab 1500 Liter', highlight: true },
                  { text: 'Lieferung in 4-7 Werktagen', highlight: false },
                  { text: 'Geprüfte Premium-Qualität', highlight: false },
                  { text: 'Über 100.000 zufriedene Kunden', highlight: true }
                ].map((usp, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-soft transition-all duration-300 hover:shadow-medium hover:border-primary-200/50"
                  >
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${usp.highlight ? 'bg-primary-100' : 'bg-accent-orange-100'}`}>
                      <CheckCircle className={`w-4 h-4 ${usp.highlight ? 'text-primary-600' : 'text-accent-orange-600'}`} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{usp.text}</span>
                  </div>
                ))}
              </div>

              {/* Trust Statistics */}
              <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-soft">
                <p className="text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">Vertrauen Sie auf Erfahrung</p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Users, value: '100.000+', label: 'Kunden', color: 'text-primary-600', bg: 'bg-primary-50' },
                    { icon: Award, value: '20+', label: 'Jahre', color: 'text-accent-orange-600', bg: 'bg-accent-orange-50' },
                    { icon: Headphones, value: '24h', label: 'Service', color: 'text-primary-600', bg: 'bg-primary-50' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-2 transition-transform duration-300 group-hover:scale-110`}>
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <div className={`text-xl lg:text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ LOWER SECTION (50vh) - Price Calculator ============ */}
      <div id="price-calculator" className="relative z-10 min-h-[50vh] flex items-center bg-gradient-to-b from-transparent via-primary-50/30 to-primary-100/40">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/30 to-transparent" />
        
        <div className="container mx-auto px-4 py-12 lg:py-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              Heizöl <span className="gradient-text-premium">Preisrechner</span>
            </h2>
            <p className="text-gray-600">Berechnen Sie Ihren individuellen Preis in Sekunden</p>
          </div>

          {/* Desktop: Horizontal Calculator */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Glow effect behind calculator */}
            <div className="absolute inset-x-4 -inset-y-4 bg-gradient-to-r from-primary-200/20 via-accent-orange-200/20 to-primary-200/20 rounded-3xl blur-2xl opacity-60 -z-10" />
            <HorizontalPriceCalculator />
          </div>

          {/* Mobile: Vertical Calculator */}
          <div className="lg:hidden">
            <MobilePriceCalculator />
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-20">
        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Mehr entdecken</span>
        <div className="w-6 h-10 border-2 border-primary-300/50 rounded-full flex justify-center p-1 backdrop-blur-sm bg-white/30">
          <div className="w-1.5 h-3 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
