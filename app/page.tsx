import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SmartChain Agreements',
  description: 'Generate and deploy legal agreements as smart contracts',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0B0D] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 sm:text-6xl md:text-7xl pb-4">
            SmartChain Agreements
          </h1>
          <p className="mt-6 text-xl text-gray-300 font-light">
            Create and deploy legally binding agreements as smart contracts on the blockchain. Choose from our professionally crafted templates to get started.
          </p>
          <div className="mt-8">
            <Link
              href="/templates"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            >
              Browse Agreement Templates
              <svg 
                className="ml-2 -mr-1 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#13141A] rounded-xl p-8 border border-[#2D2F36] backdrop-blur-xl bg-opacity-80 hover:bg-opacity-100 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Professional Templates</h3>
              <p className="text-gray-400">Legally vetted agreement templates designed for various business needs.</p>
            </div>

            <div className="bg-[#13141A] rounded-xl p-8 border border-[#2D2F36] backdrop-blur-xl bg-opacity-80 hover:bg-opacity-100 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Contract Integration</h3>
              <p className="text-gray-400">Automated execution and enforcement through blockchain technology.</p>
            </div>

            <div className="bg-[#13141A] rounded-xl p-8 border border-[#2D2F36] backdrop-blur-xl bg-opacity-80 hover:bg-opacity-100 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure & Transparent</h3>
              <p className="text-gray-400">Immutable records with cryptographic security and full transparency.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
