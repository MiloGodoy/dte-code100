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
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Repository Public Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">Repositorio Público</h2>
          </div>

          <div className="space-y-4">
            {repositoryItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-center space-x-3 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-lg p-8 flex items-center justify-between">
          <h3 className="text-white text-xl font-semibold">Queremos ser tu mejor aliado tecnológico</h3>
          <a
            href="https://wa.me/595992460600"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
          >
            💬 ¡Conversemos!
          </a>
        </div>
      </div>
    </div>
  )
}
