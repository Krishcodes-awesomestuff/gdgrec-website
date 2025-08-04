import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft,  } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* 404 Animation/Visual */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-200 select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-sm text-gray-500">
            Let's get you back to exploring GDG REC's amazing community!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
                suppressHydrationWarning={true}
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            
            <Link href="/#about">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
                suppressHydrationWarning={true}
              >
                <ArrowLeft className="w-5 h-5" />
                Learn About Us
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Or explore these sections:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/#events" 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors duration-200"
              >
                Events
              </Link>
              <span className="text-gray-300">•</span>
              <Link 
                href="/#team" 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors duration-200"
              >
                Our Team
              </Link>
              <span className="text-gray-300">•</span>
              <Link 
                href="/#contact" 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Fun GDG Element */}
        <div className="mt-12 opacity-60">
          <div className="flex justify-center items-center space-x-2 text-xs text-gray-400">
            <span className="ml-2">Powered by</span>
            <img src="/logo.png" alt="GDG REC Logo" className="w-16 h-16" />
          </div>
        </div>
      </div>
    </div>
  )
}