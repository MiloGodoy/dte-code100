'use client'

import { CheckCircle, Shield, Zap, Users, Award, Clock } from "lucide-react"

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Desarrollo Ágil",
      description: "Metodologías modernas que aceleran la entrega de proyectos sin comprometer la calidad.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad Garantizada",
      description:
        "Implementamos las mejores prácticas de seguridad para proteger tu información y la de tus clientes.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipo Especializado",
      description: "Profesionales con amplia experiencia en tecnologías de vanguardia y soluciones empresariales.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Calidad Certificada",
      description: "Procesos certificados y estándares internacionales que garantizan la excelencia en cada proyecto.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Soporte 24/7",
      description: "Asistencia técnica continua para asegurar el funcionamiento óptimo de tus sistemas.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Resultados Comprobados",
      description: "Historial exitoso con más de 100 proyectos completados y clientes satisfechos.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Por qué elegir <span className="text-teal-400">Code100</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos tu socio estratégico en transformación digital, ofreciendo soluciones tecnológicas que impulsan el
            crecimiento de tu empresa.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-700/50 hover:border-teal-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-teal-400 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{advantage.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h3>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Únete a las empresas que ya confían en Code100 para sus soluciones tecnológicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
                onClick={() => window.location.href = "https://wa.me/595992460600"}>
                Solicitar Consulta Gratuita
              </button>
              <button 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
                onClick={() => window.location.href = "https://www.code100.com.py/facturacion-electronica"}
                >
                Ver Nuestros Proyectos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
