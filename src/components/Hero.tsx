import Link from "next/link"

export default function HeroSection() {
  return (
    <div
      className="relative min-h-[400px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/city2.jpg)",
      }}
    >
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <Link
            href="https://wa.me/595992460600"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-md font-medium transition-colors inline-block text-sm md:text-base"
            >
            ¡Conversemos! →
            </Link>
        </div>

      <div className="container mx-auto px-4 py-16 text-center text-white">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 sm:text-xs">Nuestras soluciones de Documentos Transmisibles Electrónicos</h1>
        <div className="flex items-center justify-center space-x-2 text-sm">
          <span>Home</span>
          <span>-</span>
          <span>Repositorio Público</span>
        </div>
      </div>
    </div>
  )
}
