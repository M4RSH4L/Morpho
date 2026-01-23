import { Search, Code, ShoppingCart, Menu, ChefHat } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Presencia Online',
    description: 'Maximiza tu visibilidad online con SEO avanzado, análisis de keywords y estrategias personalizadas.',
    icon: Search,
    cta: 'Optimiza tu SEO',
    ctaLink: '#contacto'
  },
  {
    id: 2,
    title: 'Desarrollo Web',
    description: 'Desde agendamiento de citas hasta funnels de ventas, creamos soluciones web adaptadas a tu negocio.',
    icon: Code,
    cta: 'Descubre tu web ideal',
    ctaLink: '#contacto'
  },
  {
    id: 3,
    title: 'Tienda Online',
    description: 'Comienza o optimiza tu tienda online con una experiencia de compra fluida y segura.',
    icon: ShoppingCart,
    cta: 'Empieza tu tienda ahora',
    ctaLink: '#contacto'
  },
    {
    id: 4,
    title: 'Menu inteligente',
    description: 'Menu digital inteligente para gastronomicos, menu moderno e inttuitivo para local fisico y online para motores de busqueda con posicionamiento SEO',
    icon: ChefHat,
    cta: 'Menu Digital',
    ctaLink: '#contacto'
  }
];

export const ServicesSection = () => {
  return (
    <div className="mt-24 mb-32">
      <div className="text-center mb-16">
        <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
          Servicios
        </span>
        <h2 className="font-['Anton'] text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wider">
          Nuestros Servicios
        </h2>
        <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
          Soluciones digitales diseñadas para tu negocio
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative bg-black backdrop-blur-sm border-2 border-purple-600 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:border-purple-500">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white transition-colors duration-300" />
                  </div>

                  <h3 className="font-['Anton'] text-2xl text-white mb-4 uppercase tracking-wide">
                    {service.title}
                  </h3>

                  <p className="font-poppins text-gray-300 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <a
                    href={service.ctaLink}
                    className="inline-flex items-center gap-2 font-poppins text-purple-500 hover:text-purple-400 transition-colors duration-300 font-semibold"
                  >
                    {service.cta}
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
