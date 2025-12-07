'use client'

import { useState } from 'react'
import MetrcPresentation from './MetrcPresentation'

export default function MetrcMenu() {
  const [showPresentation, setShowPresentation] = useState(false)

  const handleViewBrief = () => {
    // Replace this URL with your actual product brief link
    window.open('https://docs.google.com/document/d/16qze9leji2rW3DMvN5VwIAcbmVUjEqKoPt2pEsVR1B4/edit?usp=sharing', '_blank')
  }

  const handleResumeLink = () => {
    // Replace this URL with your actual product brief link
    window.open('https://www.ryanandrews.me', '_blank')
  }

  const handleViewPresentation = () => {
    setShowPresentation(true)
  }

  const handleBackToMenu = () => {
    setShowPresentation(false)
  }

  if (showPresentation) {
    return <MetrcPresentation onBack={handleBackToMenu} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full p-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Metrc Project
        </h1>
        <p className="text-gray-900 mb-8 text-center">
            Hey Metrc team! Thanks for checking out my take-home assignment. 
            The product brief provides the full, detailed document. The presentation provides a high level walkthrough. I look forward to discussing this more!
          </p>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-8 text-center font-bold">
            Select an option below to view project materials
          </p>
          <div className="space-y-4">
            <button
              onClick={handleViewBrief}
              className="w-full py-4 px-6 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              View Product Brief
            </button>
            <button
              onClick={handleViewPresentation}
              className="w-full py-4 px-6 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              View Presentation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
