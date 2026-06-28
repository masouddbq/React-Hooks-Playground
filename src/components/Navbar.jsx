import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
  
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-black">J</span>
              JobBoard
            </Link>
  
            {/* Links */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: "Jobs", href: "/jobs" },
                { label: "Companies", href: "/companies" },
                { label: "About", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-150"
                >
                  {item.label}
                </Link>
              ))}
            </div>
  
            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                enter
              </Link>
              <Link
                to="/add-job"
                className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150 shadow-sm shadow-indigo-200"
              >
                submit
              </Link>
            </div>
  
          </div>
        </nav>
  
        <div className="h-16" />
      </>
    );
  };
  
export default Navbar