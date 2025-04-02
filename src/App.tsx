import { useState } from 'react';
// import '@fontsource/anton';

import { ChevronRight, Users, BarChart, MessageCircle, ArrowRight, Globe, Menu, X, Target, Users2, Rocket, Trophy, Play, ExternalLink, Eye, ChevronLeft, ChevronRight as ChevronRightIcon, Mail, LinkedinIcon, GithubIcon, Plus, Minus } from 'lucide-react';
const portfolioItems = [{
  id: 1,
  title: 'E-commerce Dashboard',
  category: 'Web Application',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80',
  size: 'large'
}, {
  id: 2,
  title: 'Analytics Platform',
  category: 'Dashboard',
  image: './assets/imagenes/Group 155.png',
  size: 'small'
}, {
  id: 3,
  title: 'Social Media Manager',
  category: 'Web Application',
  image: './assets/imagenes/Group 156.png',
  size: 'wide'
}, {
  id: 4,
  title: 'Marketing Website',
  category: 'Website',
  image: './assets/imagenes/3.png',
  size: 'tall'
}, {
  id: 5,
  title: 'Mobile Banking App',
  category: 'Mobile Application',
  image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'large'
}, {
  id: 6,
  title: 'Healthcare Platform',
  category: 'Web Application',
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'small'
}, {
  id: 7,
  title: 'Educational Portal',
  category: 'E-Learning',
  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'wide'
}, {
  id: 8,
  title: 'Fitness Tracking',
  category: 'Mobile Application',
  image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'tall'
}, {
  id: 9,
  title: 'Real Estate Platform',
  category: 'Web Application',
  image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'large'
}, {
  id: 10,
  title: 'Travel Booking System',
  category: 'Web Application',
  image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'small'
}, {
  id: 11,
  title: 'Event Management',
  category: 'Platform',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'wide'
}, {
  id: 12,
  title: 'Food Delivery App',
  category: 'Mobile Application',
  image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'small'
}, {
  id: 13,
  title: 'Music Streaming',
  category: 'Entertainment',
  image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'large'
}, {
  id: 14,
  title: 'Weather Dashboard',
  category: 'Utility',
  image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'small'
}, {
  id: 15,
  title: 'Project Management',
  category: 'Enterprise',
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
  size: 'wide'
}];
  const teamMembers = [{
    name: 'Ronan Lavorato',
    role: 'Director Comercial',
    image: './assets/imagenes/Ronan.png',
    bio: 'Full-stack developer with 8 years of experience in building scalable applications. Passionate about clean code and user experience.',
    linkedin: '#',
    github: '#',
    email: 'sarah@example.com'
  }, {
    name: 'Juliano Regidor',
    role: 'Director de Diseño',
    image: './assets/imagenes/Juliano.png', 
    bio: 'UX/UI designer specialized in creating intuitive and beautiful interfaces. Believes in the power of design to solve problems.',
    linkedin: '#',
    github: '#',
    email: 'michael@example.com'
  }];
const faqItems = [{
  question: 'What technologies do you use?',
  answer: 'We primarily work with modern web technologies including React, TypeScript, and Node.js. Our tech stack is constantly evolving to incorporate the best tools for each project.'
}, {
  question: 'Se puede financiar?',
  answer: "Dependiendo del proyecto, podemos ofrecer opciones de financiamiento. Hacemos un analisis de la viabilidad del proyecto y de los tiempos para gestionar un proyecto realista."
}, {
  question: 'Como se que mi tienda web es segura?',
  answer: 'Nuestro objetivo como Agencia, no es solo entregar un producto final, sino que la persona comprenda las ventajas y desventajas en su maxima expresion.'
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
  return <div className="relative w-full overflow-hidden">
      <div className="relative h-[600px] w-full">
        {items.map((item, index) => <div key={item.id} className={`absolute w-full h-full transition-all duration-500 ease-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative h-full w-full">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6 max-w-3xl mx-auto w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-yellow-400 text-sm md:text-base mb-4">
                    {item.category}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300">
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white/75'}`} />)}
      </div>
    </div>;
};
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
  return <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gray-900 rounded-full opacity-[0.15] blur-[100px]" />
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-purple-600 rounded-full opacity-[0.15] blur-[100px]" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-gray-900 rounded-full opacity-[0.15] blur-[100px]" />
      </div>
      <nav className="w-full px-6 py-4 border-b flex items-center justify-between fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="flex items-center space-x-2">
          <img src="./public/assets/imagenes/morpho.png" className="w-6 h-6 text-gray-600"  alt="logotipo morpho" />
          <span className="font-anton text-xl uppercase tracking-wide">
            Eccom
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            Contact
          </a>
          <button   className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Get Started
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
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
                  Features
                </a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
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
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Get Started 
              </button>
              
            </div>
            
          </div>}
      </nav>
      <main className={`relative max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'pt-[400px]' : 'pt-24'}`}>
        <div className="relative">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block">
              <span className="font-anton text-base text-yellow-400 sm:text-lg font-semibold mb-2">
                Agencia de Diseño
              </span>
            </div>
            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight uppercase tracking-wider">
              Acompañamos a las personas 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {' '}
                en su transformacion Digital. 
              </span>
            </h1>
            <p className="font-poppins text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
              Todos los casos de exitos comienzan en una idea.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-24">
            <div className="relative rounded-2xl overflow-hidden bg-gray-800">
              <div className="aspect-video relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" alt="Video Thumbnail" className=" h-full object-cover opacity-75  w-full " />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/60">
                  <button className="group relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-yellow-400 rounded-full opacity-75 group-hover:opacity-100 blur transition-opacity"></div>
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gray-900 border-2 border-white group-hover:border-yellow-400 transition-colors">
                      <Play className="w-8 h-8 text-white fill-white group-hover:text-yellow-400 transition-colors" />
                    </div>
                  </button>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl border border-gray-700">
                      <h3 className="font-anton text-xl text-white mb-2 uppercase tracking-wide">
                        Watch Our Story
                      </h3>
                      <p className="font-poppins text-gray-300 text-sm">
                        Discover how we help businesses transform and grow in
                        the digital age
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto my-24">
          <div className="text-center mb-16">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Como Trabajamos
            </span>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wider">
              Nuestro proceso de Trabajo en 4 pasos
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
              We follow a streamlined approach to deliver exceptional results
              for your business
            </p>
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
                      Initial Consultation
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
                      Strategy Development
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
                Nuestro equipo de expertos da vida a tu proyecto 
                utilizando tecnologías de vanguardia y las mejores prácticas.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center text-purple-400 group-hover:text-yellow-400 transition-colors">
                    <Rocket className="w-5 h-5 mr-2" />
                    <span className="font-poppins text-sm">Implementation</span>
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
                      Continuous Growth
                    </span>
                  </div>
                </div>
              </div>
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


        <div className="mt-24 mb-16 bg-gray-900">
          <div className="text-center pt-12 mb-8">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Our Work
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl text-white mb-4">
              Featured Projects
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
              Explore our collection of successful projects that showcase our
              expertise in creating impactful digital solutions.
            </p>
          </div>
          <Carousel items={portfolioItems} />
        </div>


        <div className="mt-24 mb-32">
          <div className="text-center mb-16">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Our E-commerce Solution
            </span>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wider">
              Complete Web Store Solution
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
              Transform your business with our comprehensive e-commerce platform
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="bg-purple-600 absolute inset-0 rounded-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-gray-900" />
                    </div>
                    <span className="font-['Anton'] text-2xl text-yellow-400">
                      01
                    </span>
                  </div>
                  <h3 className="font-['Anton'] text-2xl text-white mb-4 uppercase">
                    Diseño Profesional
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                        Nos adaptamos al diseño de tu marca
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                        Customizamos los formatos para pc y celular
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                        Optimizamos la experiencia de usuario
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="bg-purple-600 absolute inset-0 rounded-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800">
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
                        Hacemos las integraciones de metodos de pago y metodos de envio
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                       Preparacion de la tienda para el lanzamiento
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                        dejamos el sitio optimizado para SEO
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                        Marketing integrations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="bg-purple-600 absolute inset-0 rounded-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Users2 className="w-6 h-6 text-gray-900" />
                    </div>
                    <span className="font-['Anton'] text-2xl text-yellow-400">
                      03
                    </span>
                  </div>
                  <h3 className="font-['Anton'] text-2xl text-white mb-4 uppercase">
                    Autogestion
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                        Preparamos capacitaciones para que pueads gestionar tu tienda
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                        Order processing system
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">Customer management</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="font-poppins">
                        Real-time sales tracking
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-['Anton'] text-lg uppercase tracking-wide hover:bg-yellow-300 transition-colors duration-300">
                Agenda tu reunion Gratuita hoy!
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 mb-16">
          <div className="text-center mb-12">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Our Team
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl text-white mb-4">
              Meet the Experts
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
              Passionate professionals dedicated to creating exceptional digital
              experiences
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
                    <h3 className="font-anton text-xl font-bold text-white mb-1">
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

        <div className="mt-12 sm:mt-16 text-center px-4">
          <button className="w-full sm:w-auto bg-gradient-to-r from-gray-900 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold hover:from-gray-800 hover:to-purple-700 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            Start Your Journey
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="relative space-y-6 sm:space-y-8 mt-24 mb-24">
          <div className="text-center mb-16">
            <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
              Our Process
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wider">
              How We Make It Happen
            </h2>
            <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
              Our proven four-step approach to transform your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 px-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-600 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative p-8 backdrop-blur-sm rounded-2xl border border-gray-800">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                      <span className="font-anton text-3xl text-yellow-400">
                        01
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-anton text-2xl text-white mb-3 uppercase tracking-wide">
                      Foundation Phase
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 group/item">
                        <div className="p-2 rounded-lg bg-purple-600/10 group-hover/item:bg-purple-600/20 transition-colors">
                          <Users className="w-5 h-5 text-purple-400" />
                        </div>
                        <p className="font-poppins text-gray-300 group-hover/item:text-white transition-colors">
                          Build Your Audience
                        </p>
                      </div>
                      <div className="flex items-center gap-4 group/item">
                        <div className="p-2 rounded-lg bg-purple-600/10 group-hover/item:bg-purple-600/20 transition-colors">
                          <BarChart className="w-5 h-5 text-purple-400" />
                        </div>
                        <p className="font-poppins text-gray-300 group-hover/item:text-white transition-colors">
                          Analytics Setup
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-gray-900 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative p-8 backdrop-blur-sm rounded-2xl border border-gray-800">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                      <span className="font-anton text-3xl text-yellow-400">
                        02
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-anton text-2xl text-white mb-3 uppercase tracking-wide">
                      Growth Phase
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 group/item">
                        <div className="p-2 rounded-lg bg-purple-600/10 group-hover/item:bg-purple-600/20 transition-colors">
                          <MessageCircle className="w-5 h-5 text-purple-400" />
                        </div>
                        <p className="font-poppins text-gray-300 group-hover/item:text-white transition-colors">
                          Engagement Strategies
                        </p>
                      </div>
                      <div className="flex items-center gap-4 group/item">
                        <div className="p-2 rounded-lg bg-purple-600/10 group-hover/item:bg-purple-600/20 transition-colors">
                          <ArrowRight className="w-5 h-5 text-purple-400" />
                        </div>
                        <p className="font-poppins text-gray-300 group-hover/item:text-white transition-colors">
                          Conversion Optimization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-600 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative p-8 backdrop-blur-sm rounded-2xl border border-gray-800">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                      <span className="font-anton text-3xl text-yellow-400">
                        03
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-anton text-2xl text-white mb-3 uppercase tracking-wide">
                      Scaling Phase
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 group/item">
                        <div className="p-2 rounded-lg bg-purple-600/10 group-hover/item:bg-purple-600/20 transition-colors">
                          <Target className="w-5 h-5 text-purple-400" />
                        </div>
                        <p className="font-poppins text-gray-300 group-hover/item:text-white transition-colors">
                          Market Expansion
                        </p>
                      </div>
                      <div className="flex items-center gap-4 group/item">
                        <div className="p-2 rounded-lg bg-purple-600/10 group-hover/item:bg-purple-600/20 transition-colors">
                          <Users2 className="w-5 h-5 text-purple-400" />
                        </div>
                        <p className="font-poppins text-gray-300 group-hover/item:text-white transition-colors">
                          Team Growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-gray-900 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative p-8 backdrop-blur-sm rounded-2xl border border-gray-800">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                      <span className="font-anton text-3xl text-yellow-400">
                        04
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-anton text-2xl text-white mb-3 uppercase tracking-wide">
                      Optimization Phase
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 group/item">
                        <div className="p-2 rounded-lg bg-purple-600/10 group-hover/item:bg-purple-600/20 transition-colors">
                          <Rocket className="w-5 h-5 text-purple-400" />
                        </div>
                        <p className="font-poppins text-gray-300 group-hover/item:text-white transition-colors">
                          Performance Tuning
                        </p>
                      </div>
                      <div className="flex items-center gap-4 group/item">
                        <div className="p-2 rounded-lg bg-purple-600/10 group-hover/item:bg-purple-600/20 transition-colors">
                          <Trophy className="w-5 h-5 text-purple-400" />
                        </div>
                        <p className="font-poppins text-gray-300 group-hover/item:text-white transition-colors">
                          Market Leadership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
    </div>;
}