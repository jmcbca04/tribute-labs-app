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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Agreement Templates
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose a template to get started with your smart contract agreement
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {template.name}
                </h3>
                <p className="text-gray-600 mb-6">{template.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Features:
                  </h4>
                  <ul className="space-y-2">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/create?template=${template.id}`}
                  className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Use Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
