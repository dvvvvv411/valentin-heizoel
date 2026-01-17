import { Building, Users, Award, Clock, ArrowUpRight } from 'lucide-react';
import shopHeaderImage from '@/assets/shop-header.jpg';

const CompanySection = () => {
  const stats = [
    {
      icon: Building,
      number: '2007',
      label: 'Gegründet',
      description: 'Über 18 Jahre Erfahrung'
    },
    {
      icon: Users,
      number: '100.000+',
      label: 'Kunden',
      description: 'Zufriedene Heizöl-Kunden'
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Bewertung',
      description: 'Ausgezeichneter Service'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Service',
      description: 'Immer für Sie da'
    }
  ];

  const values = [
    {
      emoji: '🏆',
      title: 'Qualität',
      description: 'Wir liefern ausschließlich geprüftes Premium-Heizöl nach DIN-Norm für optimale Heizleistung und Effizienz.',
      gradient: 'from-blue-500/10 to-blue-600/10'
    },
    {
      emoji: '🤝',
      title: 'Vertrauen',
      description: 'Zuverlässigkeit und Transparenz sind die Grundpfeiler unseres Geschäfts. Darauf können Sie sich verlassen.',
      gradient: 'from-primary-500/10 to-primary-600/10'
    },
    {
      emoji: '💚',
      title: 'Service',
      description: 'Persönlicher Kundenservice und individuelle Beratung stehen bei uns an erster Stelle.',
      gradient: 'from-accent-orange-500/10 to-accent-orange-600/10'
    }
  ];

  return (
    <section id="ueber-uns" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-orange-100/20 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6">
            <Building className="w-4 h-4" />
            Über uns
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Über <span className="gradient-text-premium">Valentin Heizöl</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ihr zuverlässiger Partner für Heizöl in Deutschland mit über 20 Jahren Erfahrung. 
            Wir stehen für Qualität, Service und faire Preise.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Company Story */}
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Unsere <span className="text-accent-orange-600">Geschichte</span>
            </h3>
            
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-accent-orange-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Seit der Gründung im Jahr 2007 haben wir uns zu einem der führenden
                Heizöl-Anbieter in Deutschland entwickelt. Was als Unternehmen 
                in Mainz begann, ist heute ein zuverlässiger Partner für über 100.000 
                Kunden in ganz Deutschland.
              </p>
              <p>
                Unser Erfolgsrezept ist einfach: Wir bieten erstklassige Qualität zu 
                fairen Preisen und legen dabei größten Wert auf persönlichen Service 
                und Kundenzufriedenheit. Dabei setzen wir auf modernste Technik und 
                ein erfahrenes Team mit über 20 Jahren Erfahrung.
              </p>
              <p>
                Als deutschlandweit agierendes Unternehmen kennen wir die Bedürfnisse unserer Kunden 
                genau und sind stolz darauf, einen Beitrag zur Energieversorgung in 
                ganz Deutschland zu leisten.
              </p>
            </div>
          </div>

          {/* Company Image */}
          <div className="relative flex items-center justify-center">
            <img 
              src={shopHeaderImage} 
              alt="Valentin Heizöl Unternehmen"
              className="max-w-[85%] h-auto object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="group premium-card rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-primary-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-primary-600 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary-100 to-accent-orange-100 rounded-3xl blur-xl opacity-30" />
          
          <div className="relative glass-card rounded-2xl p-10 lg:p-14">
            <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Unsere <span className="gradient-text-premium">Werte</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-4xl">{value.emoji}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
