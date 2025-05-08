import { useState } from 'react';
// import '@fontsource/anton';
import { StepsSection } from './stepsSection'

import {  ChevronRight,
  Users,
  BarChart,
  MessageCircle,
  ArrowRight,
  Globe,
  Menu,
  X,
  Target,
  Users2,
  Rocket,
  Trophy,
  Play,
  ExternalLink,
  Eye,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Mail,
  LinkedinIcon,
  GithubIcon,
  Plus,
  Minus,
  Phone,
  Mail as MailIcon,
  MapPin,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  Calendar,} from 'lucide-react';
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
  image: './assets/imagenes/Tecnologia.png',
  size: 'small'
}, 
 {
  id: 4,
  title: 'Moda Mujer',
  category: 'moda',
  image: './assets/imagenes/Moda.png',
  size: 'tall'
}, 
{
  id: 4,
  title: 'Sanitario',
  category: 'Griferia',
  image: './assets/imagenes/Sanitarios.png',
  size: 'tall',
},{
  id: 5,
  title: 'Calzados',
  category: 'Calzados',
  image: './assets/imagenes/Zapatillas.png',
  size: 'large'
},];
  const teamMembers = [{
    name: 'Ronan Lavorato',
    role: 'BDM',
    image: './assets/imagenes/Ronan.png',
    bio: 'Experiencia en desarrollo de negocios por mas de 7 años, lider de diferentes multinacionales, con enfoque en la experiencia del cliente y la optimizacion de procesos.',
    linkedin: 'https://www.linkedin.com/in/ronan-lavorato/',
    github: '#',
    email: 'sarah@example.com'
  }, {
    name: 'Juliano Regidor',
    role: 'Designer',
    image: './assets/imagenes/Juliano.png', 
    bio: 'Especialista en Diseño e implementacion de integraciones, jefe de proyecto en mas de 25 Ecommerce en diferentes Paises.',
    linkedin: '#https://www.linkedin.com/in/ronan-lavorato/',
    github: '#',
    email: 'michael@example.com'
  }];
const faqItems = [{
  question: '¿Qué incluye el servicio de armado de tienda?',
  answer: 'Incluye configuración completa en Tiendanube: dominio propio, carga de productos, medios de pago y envío, diseño visual, banners, WhatsApp, redes sociales, y capacitación para que sepas manejarla.'
}, {
  question: 'Se puede financiar?',
  answer: "Dependiendo del proyecto, podemos ofrecer opciones de financiamiento."
}, {
  question: '¿Cuánto tarda el proceso?',
  answer: 'Entre 10 y 15 días hábiles desde que tenemos toda la informacion necesaria (productos, imágenes, etc.).'
}, {
  question: '¿Qué pasa si necesito ayuda después?',
  answer: 'Contás con soporte post-lanzamiento coordinado por el manager de proyecto, y también podés contratar mantenimiento mensual o soporte puntual.'
}, {
  question: 'Quiero una asesoria, la deberia pagar?',
  answer: 'No, la primer asesoria es totalmente gratuita. Y es donde te conocemos a ti y a tu negocio o idea de negocio. Te ayudamos a definir el proyecto y su viabilidad.'
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
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                
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
          
          <a href="#" className="text-white hover:text-gray-900">
            Home
          </a>
          <a href="#tiendas" className="text-white hover:text-gray-900">
            Tiendas
          </a>
          <a href="#work" className="text-white hover:text-gray-900">
            Metodo
          </a>
         
          <a href="#contacto" className="text-white hover:text-gray-900">
            Contacto
          </a>
          <button  onClick={() => window.open("https://wa.me/message/HPC3HAYGTB2FA1", "w.ap")}  className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-purple-700">
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
                  Nosotros
                </a>
                <a href="#contacto" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  Contacto
                </a>
              </div>
          
              <button  onClick={() => window.open("https://wa.me/message/HPC3HAYGTB2FA1", "w.ap")} className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Contactar
              </button>
              
            </div>
            
          </div>}
          
      </nav>
      
      <main className={`relative max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'pt-[400px]' : 'pt-14'}`}>
      <div className="relative min-h-[80vh] md:min-h-[70vh] flex items-center md:items-start md:pt-20 justify-center my-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-[5%] w-32 md:w-48 h-40 md:h-64 rounded-2xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <img
                src='./assets/imagenes/bc-design.png'
                alt="E-commerce"
                className="w-full h-full object-cover opacity-60 md:opacity-100"
              />
              <div className="absolute inset-0 bg-gray-900/60 md:bg-gray-900/40 backdrop-blur-[2px]"></div>
            </div>
            <div className="absolute top-1/4 right-[10%] w-36 md:w-56 h-28 md:h-40 rounded-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <img
                src='./assets/imagenes/bc-michi.png'
                alt="Digital Marketing"
                className="w-full h-full object-cover opacity-60 md:opacity-100"
              />
              <div className="absolute inset-0 bg-gray-900/60 md:bg-gray-900/40 backdrop-blur-[2px]"></div>
            </div>
            <div className="absolute bottom-0 left-[15%] w-28 md:w-40 h-40 md:h-56 rounded-2xl overflow-hidden transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <img
                src='./assets/imagenes/bc-store.png'
                alt="Mobile Commerce"
                className="w-full h-full object-cover opacity-60 md:opacity-100"
              />
              <div className="absolute inset-0 bg-gray-900/60 md:bg-gray-900/40 backdrop-blur-[2px]"></div>
            </div>
            <div className="absolute bottom-[20%] right-[5%] w-32 md:w-48 h-32 md:h-48 rounded-2xl overflow-hidden transform -rotate-12 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital Solutions"
                className="w-full h-full object-cover opacity-60 md:opacity-100"
              />
              <div className="absolute inset-0 bg-gray-900/60 md:bg-gray-900/40 backdrop-blur-[2px]"></div>
            </div>
            <div className="absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-0 md:-mt-8">
            <span className="font-['Anton'] inline-block text-yellow-400 text-xl sm:text-2xl mb-4 uppercase tracking-wide">
              Agencia de Ecommerce
            </span>
            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight uppercase tracking-wider">
            Te ayudamos a 
            <span className="gradient-text1">
            {' '}crear
            </span>
            &nbsp;tu
              <span className="gradient-text">
                {' '}
                tienda en linea.
              </span>
            </h1>
            <p className="font-poppins text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Potencia tu negocio con soluciones digitales innovadoras y
              estrategias personalizadas para el éxito en línea.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button  onClick={() => window.open("https://calendly.com/-audit/auditoria", "_blank")} className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-['Anton'] text-lg uppercase tracking-wide hover:bg-yellow-300 transition-colors duration-300">
                Agenda una reunion Gratuita!
              </button>
            </div>
          </div>
        </div>
      
     
     
        <div className="mt-24 mb-32">
          <div className="text-center mb-16">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Soluciones a Ecommerce
            </span>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wider">
            ¿Cómo va a funcionar tu tienda online?

            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
            Pensemos en 3 fases para que sepas lo que se hace en cada momento.


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
                  Exploracion.
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
                   Desarrollo
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
                    Autonomia
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
                Agenda tu reunion Gratuita!
              </button>
            </div>
          </div>
        </div>


        <StepsSection />
        {/* <div className="max-w-6xl mx-auto mb-32">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <div className="group relative overflow-hidden">
              <div className="relative backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="">
                  <img src="./assets/imagenes/Tienda nube.png" alt=""  className="group-hover:scale-110 transition-transform duration-300 rounded-xl w-16 h-16"/>
                  </div>
                  <h3 className="font-['Anton'] text-3xl text-white">Tienda nube</h3>
                  <p className="font-poppins text-gray-300 text-sm">
                    Partner
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <div className="relative backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                <div className="">
                  <img src="./assets/imagenes/meta-ads.png" alt=""  className="group-hover:scale-110 transition-transform duration-300 rounded-xl w-16 h-16"/>
                  </div>
                  <h3 className="font-['Anton'] text-3xl text-white">Meta ADS</h3>
                  <p className="font-poppins text-gray-300 text-sm">
                    Partner
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <div className="relative backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                <div className="">
                  <img src="./assets/imagenes/coding.jpg" alt=""  className="group-hover:scale-110 transition-transform duration-300 rounded-xl w-16 h-16"/>
                  </div>
                  <h3 className="font-['Anton'] text-3xl text-white">Coding</h3>
                  <p className="font-poppins text-gray-300 text-sm">
                    High-Low Code
                  </p>
                </div>
              </div>
            </div>  
            <div className="group relative overflow-hidden">
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
        </div> */}


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
                    <span onClick={() => window.open("https://calendly.com/-audit/auditoria", "_blank")} className="font-poppins text-sm">
                      Consulta inicial
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
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
            {teamMembers.map(member => <div key={member.name} className="group relative overflow-hidden rounded-xl border border-gray-800  backdrop-blur-sm  transition-all duration-300">
                <div className="p-6 flex flex-col  gap-6">
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

   {/* Contact Section */}
   <div id='contacto' className="text-center mb-16">
   <div className="mt-24 mb-32" >
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Contactanos
            </span>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wider">
              Trabajemos juntos en tu tienda online.
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
              Estas listo para transformar tu negocio?
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-4">
            <div className=" border border-gray-800 rounded-2xl p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="font-['Anton'] text-xl text-white mb-4 uppercase">
                      Contacto
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+54 9 (11) 2532-3103"
                        className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-poppins">+54 9 (11) 2532-3103</span>
                      </a>
                      {/* <a
                        href="mailto:hello@example.com"
                        className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <MailIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-poppins">hello@example.com</span>
                      </a> */}
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-poppins">
                          Buenos Aires, Argentina
                          <br />
                          Ciudad de La Plata.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Anton'] text-xl text-white mb-4 uppercase">
                      Seguinos!
                    </h3>
                    <div className="flex gap-4">
                      <a onClick={() => window.open("https://www.linkedin.com/company/morpho-agencia/", "_blank")}
                        
                        className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-colors"
                      >
                        <LinkedinIcon className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-colors"
                      >
                        <TwitterIcon className="w-5 h-5 text-white" />
                      </a>
                      <a onClick={() => window.open("https://www.instagram.com/meta.morpho.io/", "_blank")}
                        href="#"
                        className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-colors"
                      >
                        <InstagramIcon className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-colors"
                      >
                        <FacebookIcon className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <button onClick={() => window.open("https://wa.me/message/HPC3HAYGTB2FA1", "w.ap")} className="w-full bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-['Anton'] text-lg uppercase tracking-wide hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Envianos un mensaje
                  </button>
                  <button onClick={() => window.open("https://calendly.com/-audit/auditoria", "_blank")} className="w-full bg-purple-600 text-white px-8 py-4 rounded-xl font-['Anton'] text-lg uppercase tracking-wide hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Agenda una llamada
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
      </main>
    </div>;
}