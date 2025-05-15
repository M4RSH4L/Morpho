import React, { useState } from 'react'
import {
  
  Palette,
  CreditCard,
  Megaphone,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
const steps = [
  {
    number: '01',
    title: 'Socios oficiales de Tiendanube',
    description:
      'Te regalamos los primeros 30 dias de tu tienda online para que tengas tiempo de adaptarte.',
    color: 'bg-yellow-400 to-yellow-300',
    Image: './assets/imagenes/Tienda nube.png',
  },
  {
    number: '02',
    title: 'Diseño y catalogo de productos',
    description:
      'Adecuamos el diseño de tu tienda a tu marca y creamos un catalogo de productos atractivo para tus clientes.',
    icon: Palette,
    color: 'from-yellow-400 to-yellow-300',
    Image: './assets/imagenes/catalogo.png',
  },
  {
    number: '03',
    title: 'Integramos todos los medios de pago',
    description:
      'Ofrecé a tus clientes la libertad de elegir cómo pagar. Recibí el dinero de forma rápida y segura. Conectá tu tienda con Mercado Pago, PayPal, Stripe y más.',
    icon: CreditCard,
    color: 'bg-yellow-400 to-yellow-300',
    Image: './assets/imagenes/pagos.png',
  },
  {
    number: '04',
    title: 'Envíos listos desde el día uno',
    description:
      'Configuramos las mejores opciones de envío para tu tienda, adaptadas a lo que necesitás para comenzar a despachar sin demoras.',
    color: 'from-yellow-400 to-yellow-300',
    Image: './assets/imagenes/envios.png',
  },
]
export const StepsSection = () => {
  const [openStep, setOpenStep] = useState<number | null>(0)
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600 rounded-full opacity-[0.15] blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full opacity-[0.15] blur-[100px]" />
      </div> */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Anton'] text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wider">
            Tener tu tienda online es más simple
            <br className="hidden sm:block" /> de lo que imaginás
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Vendé las 24 horas y a todo el país.
          </p>
        </div>

      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
  {/* Pasos (izquierda en escritorio, abajo en móvil) */}
  <div className="w-full lg:w-[60%] space-y-4">
    {steps.map((step, index) => (
      <div key={step.number} className="group relative">
        <button
          onClick={() => setOpenStep(openStep === index ? null : index)}
          className="w-full p-6 rounded-2xl border border-gray-800 backdrop-blur-sm bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <img
                src={step.Image}
                className="w-16 h-16 flex items-center justify-center rounded-xl"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="inline-block font-['Anton'] text-yellow-400 text-lg mb-2">
                  {step.number}
                </span>
                {openStep === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <h3 className="font-['Anton'] text-2xl text-white uppercase tracking-wide text-left">
                {step.title}
              </h3>
            </div>
          </div>
        </button>
        {openStep === index && (
          <div className="mt-2 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm bg-gray-900/30">
            <p className="font-poppins text-gray-300">
              {step.description}
            </p>
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Imagen (derecha en escritorio, arriba en móvil) */}
  <div className="w-full lg:w-[40%] sticky top-24 h-fit">
    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full">
      <img
        src="./assets/imagenes/tiendanube.png"
        alt="E-commerce Platform"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
      </div>
    </section>
  )
}