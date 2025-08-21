import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-white to-gray-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
              <Image src="/code100_logo.png" alt="Code100 Logo" width={200} height={50} className="h-10 w-auto" />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-xl font-bold text-gray-800">Soluciones Tecnológicas</h1>
              <p className="text-sm text-teal-600 font-medium">Confianza y Seguridad Digital</p>
            </div>
          </div>

          {/* Contact Information Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {/* Phone */}
            <div className="flex items-start space-x-3 group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-teal-600 uppercase tracking-wide">Teléfono</p>
                <p className="text-sm font-bold text-gray-900">+595 21 729 6900</p>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  Conversemos
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 group">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-yellow-600 uppercase tracking-wide">Email</p>
                <p className="text-sm font-bold text-gray-900">info@code100.com.py</p>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                  <Globe className="h-3 w-3 mr-1" />
                  Respuesta 24h
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3 group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-teal-600 uppercase tracking-wide">Ubicación</p>
                <p className="text-sm font-bold text-gray-900">Brizuela Nº 750</p>
                <p className="text-xs text-gray-500">c/ Eusebio Lillo - Villa Morra</p>
                <p className="text-xs text-gray-500">Asunción, Paraguay</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="p-3 rounded-xl bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Contact Cards */}
        <div className="lg:hidden mt-6 grid grid-cols-1 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900">+595 21 729 6900</p>
              <p className="text-xs text-gray-500">Conversemos</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-xl">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900">info@code100.com.py</p>
              <p className="text-xs text-gray-500">Respuesta en 24h</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900">Brizuela Nº 750 c/ Eusebio Lillo</p>
              <p className="text-xs text-gray-500">Villa Morra, Asunción, Paraguay</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
