"use client";

import Link from "next/link";

const templates = [
  {
    id: "service-agreement",
    name: "Service Agreement",
    description:
      "A standard agreement between a service provider and client, including payment terms and service scope.",
    features: [
      "Define service scope and deliverables",
      "Set payment terms and timeline",
      "Include blockchain-based payment triggers",
      "Automatic milestone tracking",
    ],
  },
  {
    id: "nda",
    name: "Non-Disclosure Agreement",
    description:
      "Protect confidential information shared between parties with this smart contract-enabled NDA.",
    features: [
      "Define confidential information scope",
      "Set agreement duration",
      "Specify permitted uses",
      "Blockchain-verified signatures",
    ],
  },
  {
    id: "consulting",
    name: "Consulting Agreement",
    description:
      "A comprehensive agreement for consulting services with built-in payment and milestone tracking.",
    features: [
      "Define consulting services",
      "Set fee structure",
      "Include performance metrics",
      "Automated payment releases",
    ],
  },
];

export default function Templates() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Agreement Templates
          </h1>
          <p className="mt-4 text-xl text-gray-300 font-light">
            Choose a template to get started with your smart contract agreement
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-[#13141A] rounded-xl p-8 border border-[#2D2F36] backdrop-blur-xl bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
                  {template.name}
                </h3>
                <p className="text-gray-300 mb-6">{template.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-200 mb-3">
                    Features:
                  </h4>
                  <ul className="space-y-2">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/create?template=${template.id}`}
                className="block w-full text-center px-6 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              >
                Use Template
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
