
import { Star, Quote, ArrowRight, Sparkles } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Maria Huber',
      location: 'Berlin',
      rating: 5,
      text: 'Bereits zum dritten Mal bestellt und immer top zufrieden! Pünktliche Lieferung, faire Preise und sehr freundlicher Service. Kann Valentin Heizöl nur weiterempfehlen!',
      date: '2024-01-15'
    },
    {
      name: 'Thomas Wagner',
      location: 'Hamburg',
      rating: 5,
      text: 'Schnelle und unkomplizierte Bestellung. Der Fahrer war sehr höflich und die Qualität des Heizöls ist ausgezeichnet. Heize seit Jahren günstiger als mit Gas!',
      date: '2024-01-10'
    },
    {
      name: 'Familie Schneider',
      location: 'Köln',
      rating: 5,
      text: 'Hervorragender Kundenservice! Hatten eine Frage zur Lieferung und wurden sofort freundlich beraten. Die Lieferung kam pünktlich und alles lief perfekt.',
      date: '2024-01-08'
    },
    {
      name: 'Johann Müller',
      location: 'Frankfurt am Main',
      rating: 5,
      text: 'Seit 5 Jahren treuer Kunde. Zuverlässig, günstig und immer gute Qualität. Besonders schätze ich die kostenlose Lieferung und die schnelle Abwicklung.',
      date: '2024-01-05'
    },
    {
      name: 'Sarah Becker',
      location: 'Stuttgart',
      rating: 5,
      text: 'Online-Bestellung war super einfach, der Preisrechner sehr hilfreich. Lieferung kam wie versprochen und das Personal war sehr professionell.',
      date: '2024-01-03'
    },
    {
      name: 'Klaus Fischer',
      location: 'Leipzig',
      rating: 5,
      text: 'Beste Heizölpreise in der Region! Habe verschiedene Anbieter verglichen und Valentin Heizöl war nicht nur günstiger, sondern auch noch serviceorientierter.',
      date: '2023-12-28'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={18}
        className={`${index < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'} transition-all duration-300`}
      />
    ));
  };

  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('price-calculator');
    calculatorElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-orange-100/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-amber-700 text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            Kundenstimmen
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Das sagen unsere <span className="gradient-text-premium">Kunden</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Über 100.000 zufriedene Kunden vertrauen auf unsere Qualität und unseren Service.
          </p>
          
          {/* Overall Rating Badge */}
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-glass border border-white/50">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div>
              <span className="text-2xl font-bold text-primary-600">4.9</span>
              <span className="text-gray-500">/5</span>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <span className="text-gray-600 font-medium">1.200+ Bewertungen</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group premium-card rounded-2xl p-6 lg:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-600" />
                </div>
                <div className="flex gap-0.5">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                "{review.text}"
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                </div>
                <div className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                  {new Date(review.date).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-orange-500 rounded-3xl blur-xl opacity-20" />
          
          <div className="relative mesh-gradient rounded-2xl p-10 lg:p-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-orange-500/10 rounded-full blur-3xl" />
            
            <div className="relative text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Werden Sie Teil unserer Community
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Werden auch Sie Teil unserer zufriedenen Kunden!
              </h3>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Überzeugen Sie sich selbst von unserem erstklassigen Service und unseren fairen Preisen.
              </p>
              
              <button 
                onClick={scrollToCalculator}
                className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-premium"
              >
                Jetzt Preis berechnen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
