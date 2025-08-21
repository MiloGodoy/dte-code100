import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.3'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="absolute top-6 right-6 z-10">
        <Link
          href="https://wa.me/595992460600"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          Contactar
        </Link>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-700">
            <div className="flex space-x-1">
              <button className="px-8 py-3 rounded-md bg-teal-600 text-white font-medium text-sm transition-all duration-300 shadow-sm">
                Repositorio Público
              </button>
              <button className="px-8 py-3 rounded-md text-gray-300 hover:bg-gray-700 font-medium text-sm transition-all duration-300">
                Soluciones
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-yellow-500/30">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Soluciones Digitales Avanzadas
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Documentos Transmisibles
            <span className="block text-teal-400">Electrónicos</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
            Transformamos la gestión documental de tu empresa con tecnología de vanguardia
          </p>

          <div className="flex items-center justify-center space-x-3 text-sm text-gray-400">
            <span className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full font-medium">Home</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="bg-teal-600/20 text-teal-300 px-4 py-2 rounded-full border border-teal-500/30 font-medium">
              Repositorio Público
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
