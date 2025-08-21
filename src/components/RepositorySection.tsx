import { FileText } from "lucide-react"

const repositoryItems = [
  "DTEs",
  "PS y DPS que implementan",
  "Proforma del contrato de prestación de servicios",
  "Las resoluciones que habilitan o revocan al PSDTE",
  "Leyes, Decretos, Reglamentos y Resoluciones que rigen la Actividad",
  "Identificación, Domicilio y Medios de Contacto",
  "Listado de PSS a PDTE",
]

export default function RepositorySection() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Repository Public Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-teal-400 mr-4"></div>
            <h2 className="text-3xl font-bold text-white">Repositorio Público</h2>
          </div>

          <div className="space-y-4">
            {repositoryItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center space-x-3 hover:bg-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-teal-400" />
                </div>
                <span className="text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-950/80 border border-gray-700 rounded-lg p-8 flex items-center justify-between">
          <h3 className="text-white text-xl font-semibold">Te brindamos el mejor servicio de tecnología</h3>
          <a
            href="https://wa.me/595992460600"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
          >
            💬 ¡Conversemos!
          </a>
        </div>
      </div>
    </div>
  )
}
