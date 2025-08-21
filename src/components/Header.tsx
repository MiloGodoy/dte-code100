import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import Logo from '../../public/code100_logo.png'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt="DTE Logo" width={120} height={60} className="h-12 w-auto" />
          </div>

          {/* Contact Information */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <div className="bg-orange-100 p-2 rounded-full">
                <Phone className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">+595 21 729 6900</p>
                <p className="text-xs text-gray-600">(Conversemos)</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <div className="bg-red-100 p-2 rounded-full">
                <Mail className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email:</p>
                <p className="text-sm font-semibold text-gray-900">info@code100.com.py</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2">
              <div className="bg-orange-100 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Brizuela Nº 750 c/ Eusebio Lillo - Villa Morra</p>
                <p className="text-xs text-gray-600">Asunción, Paraguay</p>
              </div>
            </div>
          </div>

          {/* Mobile menu button - for future mobile navigation */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile contact info */}
        <div className="md:hidden mt-4 space-y-3">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <Phone className="h-4 w-4 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">+595 983 245 394</p>
              <p className="text-xs text-gray-600">(Conversemos)</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-red-100 p-2 rounded-full">
              <Mail className="h-4 w-4 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">info@dtesa.com.py</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <MapPin className="h-4 w-4 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Gonzalo Bulnes</p>
              <p className="text-xs text-gray-600">Asunción, Paraguay</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
