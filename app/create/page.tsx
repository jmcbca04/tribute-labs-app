'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import AgreementForm from '../components/AgreementForm';
import { getTemplateByType, TemplateType } from '../templates/templateManager';

interface FormData {
  [key: string]: string;
}

export default function CreateAgreement() {
  const searchParams = useSearchParams();
  const [agreement, setAgreement] = useState<string | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployedAddress, setDeployedAddress] = useState<string | null>(null);
  const [templateType, setTemplateType] = useState<TemplateType>('service-agreement');

  useEffect(() => {
    const template = searchParams.get('template') as TemplateType;
    if (template) {
      setTemplateType(template);
    }
  }, [searchParams]);

  const handleSubmit = (data: FormData) => {
    let filledTemplate = getTemplateByType(templateType);
    Object.entries(data).forEach(([key, value]) => {
      filledTemplate = filledTemplate.replace(new RegExp(`\\[\\[.*?: ${key}\\]\\]`, 'g'), value);
    });
    setAgreement(filledTemplate);
  };

  const handleDeploy = async () => {
    setIsDeploying(true);

    // Simulate contract deployment with a delay
    setTimeout(() => {
      // Generate a mock contract address
      const mockAddress = '0x' + Array(40).fill(0).map(() => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      
      setDeployedAddress(mockAddress);
      setIsDeploying(false);
    }, 2000); // 2 second delay to simulate deployment
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              {templateType === 'service-agreement' && 'Create Service Agreement'}
              {templateType === 'consulting' && 'Create Consulting Agreement'}
              {templateType === 'nda' && 'Create Non-Disclosure Agreement'}
            </h1>
            
            {!agreement ? (
              <AgreementForm onSubmit={handleSubmit} templateType={templateType} />
            ) : (
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <pre className="whitespace-pre-wrap font-sans text-base text-gray-900 leading-relaxed">
                    {agreement}
                  </pre>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setAgreement(null)}
                    className="flex-1 py-3 px-6 border border-transparent rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Create New Agreement
                  </button>
                  <button
                    onClick={handleDeploy}
                    disabled={isDeploying}
                    className="flex-1 py-3 px-6 border border-transparent rounded-lg text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDeploying ? 'Deploying...' : 'Deploy as Smart Contract'}
                  </button>
                </div>
                {deployedAddress && (
                  <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-base text-gray-900">
                      <p className="font-semibold text-lg mb-2">Contract deployed successfully!</p>
                      <div className="mt-3 p-4 bg-white rounded-lg border border-green-100">
                        <p className="font-medium text-sm text-gray-900 mb-1">Contract Address:</p>
                        <p className="font-mono text-sm break-all text-gray-900">{deployedAddress}</p>
                      </div>
                      <p className="mt-4 text-sm text-gray-900 italic">
                        (This is a mock deployment for demonstration purposes)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 