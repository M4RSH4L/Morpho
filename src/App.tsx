import { useState } from 'react';
// import '@fontsource/anton';


import { ChevronRight, Users, BarChart, MessageCircle, ArrowRight, Globe, Menu, X, Target, Users2, Rocket, Trophy, Play, ExternalLink, Eye, ChevronLeft, ChevronRight as ChevronRightIcon, Mail, LinkedinIcon, GithubIcon, Plus, Minus } from 'lucide-react';
 const portfolioItems = [
//   id: 1,
//   title: 'E-commerce Dashboard',
//   category: 'Web Application',
//   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80',
//   size: 'large'
// }, 
{
  id: 2,
  title: 'Tecnologia',
  category: 'Celulares',
  image: './assets/imagenes/B1.png',
  size: 'small'
}, 
 {
  id: 4,
  title: 'Moda Mujer',
  category: 'moda',
  image: './assets/imagenes/C (3).png',
  size: 'tall'
}, 
{
  id: 4,
  title: 'Celulares',
  category: 'Griferia',
  image: './assets/imagenes/B1.png',
  size: 'tall',
},{
  id: 5,
  title: 'Calzados',
  category: 'Calzados',
  image: './assets/imagenes/C (4).png',
  size: 'large'
}, {
  id: 6,
  title: 'Sanitarios',
  category: 'Moda',
  image: './assets/imagenes/C (2).png',
  size: 'small'
}];
  const teamMembers = [{
    name: 'Ronan Lavorato',
    role: 'Director Comercial',
    image: './assets/imagenes/Ronan.png',
    bio: 'Experiencia en desarrollo de negocios por mas de 7 años, lider de diferentes multinacionales, con enfoque en la experiencia del cliente y la optimizacion de procesos.',
    linkedin: 'https://www.linkedin.com/in/ronan-lavorato/',
    github: '#',
    email: 'sarah@example.com'
  }, {
    name: 'Juliano Regidor',
    role: 'Director de Diseño',
    image: './assets/imagenes/Juliano.png', 
    bio: 'Especialista en Diseño e implementacion de integraciones, jefe de proyecto en mas de 25 Eccomerce en diferentes Paises.',
    linkedin: '#https://www.linkedin.com/in/ronan-lavorato/',
    github: '#',
    email: 'michael@example.com'
  }];
const faqItems = [{
  question: '¿Qué incluye el servicio de armado de tienda?',
  answer: 'Incluye configuración completa en Tiendanube: dominio propio, carga de productos, medios de pago y envío, diseño visual, banners, WhatsApp, redes sociales, y capacitación para que sepas manejarla.'
}, {
  question: 'Se puede financiar?',
  answer: "Dependiendo del proyecto, podemos ofrecer opciones de financiamiento. Hacemos un analisis de la viabilidad del proyecto y de los tiempos para gestionar un proyecto realista."
}, {
  question: '¿Cuánto tarda el proceso?',
  answer: 'Entre 10 y 15 días hábiles desde que tenemos toda la info necesaria (productos, textos, imágenes, etc.).'
}, {
  question: '¿Qué pasa si necesito ayuda después?',
  answer: 'Contás con soporte post-lanzamiento por X días (esto lo definíamos vos o yo), y también podés contratar mantenimiento mensual o soporte puntual.'
}, {
  question: 'Quiero una asesoria, la deberia pagar?',
  answer: 'No, la primer asesoria es gratuita. Y es donde ponemos los pies sobre la tierra y analizamos juntos si el proyecto es viable, si hay que hacerle ajustes o si no funciona.'
}];
type CarouselProps = {
  items: {
    id: number;
    title: string;
    category: string;
    image: string;
    size: string;
  }[];
};

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  };
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full transition-all duration-500 ease-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="relative h-full w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-12">
                <div className=" rounded-xl p-4 sm:p-6 max-w-3xl mx-auto w-full">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  {/* <p className="text-yellow-400 text-sm md:text-base mb-4">{item.category}</p> */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    {/* <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit</span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Flechas navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
  
      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}  
type FAQProps = {
  items: {
    question: string;
    answer: string;
  }[];
};

const FAQ = ({ items }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return <div className="space-y-4">
      {items.map((item, index) => <div key={index} className="border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm">
          <button className="w-full p-6 text-left flex items-center justify-between bg-gray-900/50 hover:bg-gray-900/70 transition-colors" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            <span className="text-lg font-semibold text-white">
              {item.question}
            </span>
            {openIndex === index ? <Minus className="w-5 h-5 text-yellow-400" /> : <Plus className="w-5 h-5 text-yellow-400" />}
          </button>
          {openIndex === index && <div className="p-6 bg-gray-800/30">
              <p className="text-gray-300">{item.answer}</p>
            </div>}
        </div>)}
    </div>;
};
export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="w-full min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-black rounded-full opacity-[0.15] blur-[100px]" />
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-black rounded-full opacity-[0.15] blur-[100px]" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-black rounded-full opacity-[0.15] blur-[100px]" />
      </div>
      <nav className="w-full px-6 py-4 border-b flex items-center justify-between fixed top-0 left-0 right-0  backdrop-blur-sm z-50">
        <div className="flex items-center space-x-2">
          <img src="./assets/imagenes/morpho.png" className="w-70 h-8 text-gray-600"  alt="logotipo morpho" />
          {/* <span className="font-anton text-xl uppercase tracking-wide">
            Eccom
          </span> */}
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#work" className="text-white hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            Contact
          </a>
          <button  onClick={() => window.open("https://calendly.com/-audit/auditoria", "_blank")}  className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Contactanos
          </button>
         
        </div>
        
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
        </button>
        {isMenuOpen && <div className="absolute top-full left-0 right-0 bg-gray-900 border-b shadow-lg md:hidden z-50">
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-anton text-xl text-gray-900 uppercase tracking-wide">
                  Main Menu
                </h3>
                <a href="#work" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  Features
                </a>
                <a href="#tiendas" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  About
                </a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  Contact
                </a>
              </div>
              <div className="space-y-2">
                <h3 className="font-anton text-xl text-gray-900 uppercase tracking-wide">
                  Categories
                </h3>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  Foundation Phase
                </a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  Growth Phase
                </a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  Scaling Phase
                </a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  Optimization Phase
                </a>
              </div>
              <button  onClick={() => window.open("https://calendly.com/-audit/auditoria", "_blank")} className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Get Started 
              </button>
              
            </div>
            
          </div>}
          
      </nav>
      
      <main className={`relative max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'pt-[400px]' : 'pt-24'}`}>
        <div className="relative">
          <div className="text-center mb-12 sm:mb-16">
            
            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight uppercase tracking-wider">
            Acompañamos tu
            <span className="gradient-text1">
            {' '}transformacion 
            </span>
             de
              <span className="gradient-text">
                {' '}
                identidad digital
              </span>
            </h1>
            <div className="inline-block">
              <span className="font-poppins text-base text-yellow-400 sm:text-lg font-semibold mb-2">
                Agencia de Eccomerce.
              </span>
            </div>
          </div>
         
          <div className="max-w-4xl mx-auto mb-24">
            <div className="relative rounded-2xl overflow-hidden bg-gray-800">
              <div className="aspect-video relative">
                 <img src="./assets/imagenes/portrait.png" alt="Video Thumbnail" className=" h-full object-cover opacity-75  w-full " /> 
               
                
              </div>
              
            </div>
            <div className="mt-12 text-center">
              <button  onClick={() => window.open("https://calendly.com/-audit/auditoria", "_blank")} className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-['Anton'] text-lg uppercase tracking-wide hover:bg-yellow-300 transition-colors duration-300">
                Agenda tu reunion Gratuita hoy!
              </button>
            </div>
          </div>
        
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="mt-24 mb-32">
          <div className="text-center mb-16">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Soluciones a Eccomerce
            </span>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wider">
            ¿Cómo vamos a hacer despegar tu tienda online?

            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
            Lanzamos tu negocio digital en 3 pasos bien simples:


            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="bg-purple-600 absolute inset-0 rounded-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-black p-8 rounded-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-gray-900" />
                    </div>
                    <span className="font-['Anton'] text-2xl text-yellow-400">
                      01
                    </span>
                  </div>
                  <h3 className="font-['Anton'] text-2xl text-white mb-4 uppercase">
                  Diseño a medida
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                      Nos metemos de lleno en tu marca para crear un diseño que refleje su esencia.
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                      Adaptamos el diseño para que se vea increíble en compu y en celular
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                      Pensamos en cada detalle para que tus clientes disfruten navegar en tu sitio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="bg-purple-600 absolute inset-0 rounded-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-black p-8 rounded-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-gray-900" />
                    </div>
                    <span className="font-['Anton'] text-2xl text-yellow-400">
                      02
                    </span>
                  </div>
                  <h3 className="font-['Anton'] text-2xl text-white mb-4 uppercase">
                    Puesta en Marcha
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                      Conectamos todo lo necesario para que tu tienda quede lista para vender.
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                      Métodos de pago y envío integrados
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                       Desarrollamos el primer producto viable de tu negocio.
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                      Testeamos cada funcion para que todo funcione a la perfeccion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="bg-purple-600 absolute inset-0 rounded-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-black p-8 rounded-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Users2 className="w-6 h-6 text-gray-900" />
                    </div>
                    <span className="font-['Anton'] text-2xl text-yellow-400">
                      03
                    </span>
                  </div>
                  <h3 className="font-['Anton'] text-2xl text-white mb-4 uppercase">
                    Entrega y Autogestion
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                        Te capacitamos a ti y a tus socios para que puedan gestionar la tienda sin problemas.
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                       Integramos tu web en redes y google para que tengas visibilidad.
                      </span>
                    </div>
                 
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                       Tu tienda Web esta lista para que tus clientes compren las 24hs.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button  onClick={() => window.open("https://calendly.com/-audit/auditoria", "_blank")} className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-['Anton'] text-lg uppercase tracking-wide hover:bg-yellow-300 transition-colors duration-300">
                Agenda tu reunion Gratuita hoy!
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-gray-900/50 to-gray-900/80 rounded-2xl opacity-80 transition-all duration-300 group-hover:opacity-90" />
              <div className="relative backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center border border-yellow-400/20 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="font-['Anton'] text-3xl text-white">25+</h3>
                  <p className="font-poppins text-gray-300 text-sm">
                    Proyectos realizados en 2025.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-gray-900/50 to-gray-900/80 rounded-2xl opacity-80 transition-all duration-300 group-hover:opacity-90" />
              <div className="relative backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center border border-yellow-400/20 group-hover:scale-110 transition-transform duration-300">
                    <Users2 className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="font-['Anton'] text-3xl text-white">50k+</h3>
                  <p className="font-poppins text-gray-300 text-sm">
                    Productos en linea
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-gray-900/50 to-gray-900/80 rounded-2xl opacity-80 transition-all duration-300 group-hover:opacity-90" />
              <div className="relative backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center border border-yellow-400/20 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="font-['Anton'] text-3xl text-white">98%</h3>
                  <p className="font-poppins text-gray-300 text-sm">
                    Clientes satisfechos
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-gray-900/50 to-gray-900/80 rounded-2xl opacity-80 transition-all duration-300 group-hover:opacity-90" />
              <div className="relative backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center border border-yellow-400/20 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="font-['Anton'] text-3xl text-white">180%+</h3>
                  <p className="font-poppins text-gray-300 text-sm">
                    De crecimiento en los ultimos 3 meses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div  className="mt-24 mb-16 bg-black">
          <div id="tiendas" className="text-center pt-12 mb-8">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Tiendas
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl text-white mb-4">
            Nuestro ultimos trabajos
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
              Explora nuestra collecion de diferentes nichos de mercados, centrado en la experiencia de usuario y la optimizacion de ventas.
            </p>
          </div>
          <Carousel items={portfolioItems} />
        </div>



        <div  id="work" className="max-w-6xl mx-auto my-24">
          <div className="text-center mb-16">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Como Trabajamos
            </span>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wider">
              Desarrollamos tu tienda en linea en 4 pasos
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
              Seguimos un desarrollo claro para que tener una tienda web sea algo sencillo y accesible.
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            {/* <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div> */}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/50 to-gray-900 opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative p-6 border border-gray-800 rounded-2xl backdrop-blur-sm bg-gray-900/30 h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                    <span className="font-['Anton'] text-2xl text-yellow-400">
                      01
                    </span>
                  </div>
                </div>
                <h3 className="font-['Anton'] text-xl text-white mb-3 uppercase tracking-wide">
                  Fase de Indagacion
                </h3>
                <p className="font-poppins text-gray-300 text-sm flex-grow">
                  En esta primera instancia se averigua la viabilidad del proyecto y de los tiempos para gestionar un proyecto realista.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center text-purple-400 group-hover:text-yellow-400 transition-colors">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span className="font-poppins text-sm">
                      Consulta inicial
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/50 to-gray-900 opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative p-6 border border-gray-800 rounded-2xl backdrop-blur-sm bg-gray-900/30 h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                    <span className="font-['Anton'] text-2xl text-yellow-400">
                      02
                    </span>
                  </div>
                </div>
                <h3 className="font-['Anton'] text-xl text-white mb-3 uppercase tracking-wide">
                  Estrategia y Planificacion
                </h3>
                <p className="font-poppins text-gray-300 text-sm flex-grow">
                Creamos planes de proyecto detallados y 
                diseños de maqueta que se alinean con tu marca y objetivos comerciales.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center text-purple-400 group-hover:text-yellow-400 transition-colors">
                    <Target className="w-5 h-5 mr-2" />
                    <span className="font-poppins text-sm">
                      Desarrollo de Estrategia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/50 to-gray-900 opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative p-6 border border-gray-800 rounded-2xl backdrop-blur-sm bg-gray-900/30 h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                    <span className="font-['Anton'] text-2xl text-yellow-400">
                      03
                    </span>
                  </div>
                </div>
                <h3 className="font-['Anton'] text-xl text-white mb-3 uppercase tracking-wide">
                  Diseño y Desarrollo
                </h3>
                <p className="font-poppins text-gray-300 text-sm flex-grow">
                Nos encargamos de que todo funcione a la perfección desde el primer clic. Llevamos tu proyecto del concepto a la realidad con una implementación sólida, ágil y enfocada en resultados.


                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center text-purple-400 group-hover:text-yellow-400 transition-colors">
                    <Rocket className="w-5 h-5 mr-2" />
                    <span className="font-poppins text-sm">Implementacion</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/50 to-gray-900 opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative p-6 border border-gray-800 rounded-2xl backdrop-blur-sm bg-gray-900/30 h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                    <span className="font-['Anton'] text-2xl text-yellow-400">
                      04
                    </span>
                  </div>
                </div>
                <h3 className="font-['Anton'] text-xl text-white mb-3 uppercase tracking-wide">
                Entrega y Autogestion
                </h3>
                <p className="font-poppins text-gray-300 text-sm flex-grow">
                Te entregamos tu tienda lista para vender y te capacitamos para que la gestiones con confianza desde el inicio.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center text-purple-400 group-hover:text-yellow-400 transition-colors">
                    <Trophy className="w-5 h-5 mr-2" />
                    <span className="font-poppins text-sm">
                      Entrega 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 mb-16">
          <div className="text-center mb-12">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Nuestro equipo
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl text-white mb-4">
              
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
              Mas de 12 años de experiencia en negocios digitales, listos para ayudarte a crecer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 px-4">
            {teamMembers.map(member => <div key={member.name} className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <div className="p-6 flex flex-col sm:flex-row gap-6">
                  <div className="relative w-32 h-32 mx-auto sm:mx-0">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-anton text-xl text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="font-poppins text-gray-700 text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="font-poppins text-gray-300 mb-4">
                      {member.bio}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start space-x-4">
                      <a href={member.linkedin} className="text-gray-400 hover:text-white transition-colors">
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                      <a href={member.github} className="text-gray-400 hover:text-white transition-colors">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        <div className="mt-24 mb-16">
          <div className="text-center mb-12">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              FAQ
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl text-white mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4 mb-8">
              Find answers to common questions about our services and process
            </p>
          </div>
          <div className="max-w-3xl mx-auto px-4">
            <FAQ items={faqItems} />
          </div>
        </div>

  
      </main>
    </div>;
}