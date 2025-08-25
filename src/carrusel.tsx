import React, { useState } from 'react'
import { ChevronLeft, ChevronRightIcon } from 'lucide-react'

export const Carrusel = () => {
  const [currentPhoneIndex, setCurrentPhoneIndex] = useState(0)

  // ✅ Lista de videos
  const videos = [
    "/assets/imagenes/videos/Tienda1.mp4",
    "/assets/imagenes/videos/Tienda2.mp4",
    "/assets/imagenes/videos/Tienda5.mp4",
    "/assets/imagenes/videos/Mobile.mp4"
  ]

  return (
    <div className=" mb-32 bg-black">
      <div className=" mb-16 bg-black">
        <div id="tiendas" className="text-center pt-12 mb-8">
          <span className="font-poppins inline-block text-yellow-400 text-base sm:text-lg font-semibold mb-2">
            Tiendas
          </span>
          <h2 className="font-anton uppercase text-3xl sm:text-4xl text-white mb-4">
            Nuestros últimos trabajos
          </h2>
          <p className="font-poppins text-gray-300 max-w-2xl mx-auto px-4">
            Explorá nuestra colección de diferentes nichos de mercado, centrada en la experiencia de usuario y la optimización de ventas.
          </p>
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4">
        <div className="relative overflow-hidden py-12">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentPhoneIndex * (100 / (window.innerWidth >= 768 ? 2 : 1))}%)`,
            }}
          >
            {videos.map((videoSrc, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 min-w-full md:min-w-[50%] flex justify-center items-center px-4"
              >
                <div className="relative w-[280px] md:w-[250px] aspect-[9/19]">
                  <div className="absolute inset-0  rounded-[3rem] p-4 shadow-xl">
                    <div className="relative h-full w-full bg-gray-900 rounded-[2rem] overflow-hidden">
                      <div className="absolute inset-0 bg-gray-800">
                        <div className="w-full h-full bg-gray-800">
                          <div className="w-full h-full">
                            <video
                              className="w-full h-full object-cover"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src={videoSrc} type="video/mp4" />
                              Tu navegador no soporta el tag de video.
                            </video>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flechas */}
          <button
            onClick={() => setCurrentPhoneIndex((prev) => Math.max(0, prev - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors ${currentPhoneIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPhoneIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setCurrentPhoneIndex((prev) =>
                Math.min(window.innerWidth >= 768 ? videos.length - 2 : videos.length - 1, prev + 1)
              )
            }
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors ${currentPhoneIndex === (window.innerWidth >= 768 ? videos.length - 2 : videos.length - 1) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={
              currentPhoneIndex === (window.innerWidth >= 768 ? videos.length - 2 : videos.length - 1)
            }
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.slice(0, window.innerWidth >= 768 ? videos.length - 1 : videos.length).map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${currentPhoneIndex === index ? 'w-12 bg-purple-600' : 'w-2 bg-gray-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
