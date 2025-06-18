"use client"

import { useEffect } from 'react'

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force animations to work in production
    const style = document.createElement('style')
    style.textContent = `
      /* Force animations to work */
      .animate-float-slow {
        animation: float-slow 6s ease-in-out infinite !important;
      }
      .animate-float-medium {
        animation: float-medium 4s ease-in-out infinite !important;
      }
      .animate-float-fast {
        animation: float-fast 3s ease-in-out infinite !important;
      }
      
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px) rotate(12deg) !important; }
        50% { transform: translateY(-10px) rotate(12deg) !important; }
      }
      
      @keyframes float-medium {
        0%, 100% { transform: translateY(0px) rotate(-6deg) !important; }
        50% { transform: translateY(-15px) rotate(-6deg) !important; }
      }
      
      @keyframes float-fast {
        0%, 100% { transform: translateY(0px) rotate(45deg) !important; }
        50% { transform: translateY(-20px) rotate(45deg) !important; }
      }
      
      /* Hover effects */
      .social-icon-hover {
        transition: all 0.2s ease-in-out !important;
      }
      .social-icon-hover:hover {
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
      }
      
      .logo-container {
        transition: all 0.3s ease-in-out !important;
      }
      .logo-container:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3) !important;
      }
      
      /* Dark mode effects */
      .dark .social-icon-hover:hover {
        box-shadow: 0 4px 8px rgba(34, 211, 238, 0.3) !important;
      }
      .dark .logo-container:hover {
        box-shadow: 0 4px 12px rgba(34, 211, 238, 0.4) !important;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return <>{children}</>
} 