import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SmartChain Agreements',
  description: 'Generate and deploy legal agreements as smart contracts',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            SmartChain Agreements
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Generate legal agreements and deploy them as smart contracts on the blockchain.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Template Selection Card */}
            <div className="bg-white overflow-hidden shadow-lg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Agreement Templates</h3>
              <p className="text-base text-gray-600 mb-6">
                Choose from our pre-defined legal agreement templates
              </p>
              <Link
                href="/templates"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                Browse Templates
              </Link>
            </div>

            {/* Form Generation Card */}
            <div className="bg-white overflow-hidden shadow-lg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Create Agreement</h3>
              <p className="text-base text-gray-600 mb-6">
                Fill out the agreement details and generate your contract
              </p>
              <Link
                href="/create"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                Start Creating
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
