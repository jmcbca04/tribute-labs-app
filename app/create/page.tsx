'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import AgreementForm from '../components/AgreementForm';
import { getTemplateByType, TemplateType } from '../templates/templateManager';

interface FormData {
  [key: string]: string;
}

function CreateAgreementForm() {
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
    <div className="min-h-screen bg-[#0A0B0D] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#13141A] shadow-lg rounded-xl overflow-hidden border border-[#2D2F36] backdrop-blur-xl bg-opacity-80">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-8">
              {templateType === 'service-agreement' && 'Create Service Agreement'}
              {templateType === 'consulting' && 'Create Consulting Agreement'}
              {templateType === 'nda' && 'Create Non-Disclosure Agreement'}
            </h1>
            
            {!agreement ? (
              <AgreementForm onSubmit={handleSubmit} templateType={templateType} />
            ) : (
              <div className="space-y-8">
                <div className="bg-[#1A1B21] p-6 rounded-xl border border-[#2D2F36]">
                  <pre className="whitespace-pre-wrap font-mono text-base text-gray-300 leading-relaxed">
                    {agreement}
                  </pre>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setAgreement(null)}
                    className="flex-1 py-3 px-6 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                  >
                    Create New Agreement
                  </button>
                  <button
                    onClick={handleDeploy}
                    disabled={isDeploying}
                    className="flex-1 py-3 px-6 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDeploying ? 'Deploying...' : 'Deploy as Smart Contract'}
                  </button>
                </div>
                {deployedAddress && (
                  <div className="mt-6 p-6 bg-[#1A1B21] rounded-xl border border-[#2D2F36]">
                    <div className="text-base text-gray-300">
                      <p className="font-semibold text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Contract deployed successfully!</p>
                      <div className="mt-3 p-4 bg-[#13141A] rounded-lg border border-[#2D2F36]">
                        <p className="font-medium text-sm text-gray-300 mb-1">Contract Address:</p>
                        <p className="font-mono text-sm break-all text-gray-300">{deployedAddress}</p>
                      </div>
                      <p className="mt-4 text-sm text-gray-400 italic">
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

// Loading component for Suspense fallback
function LoadingState() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#13141A] shadow-lg rounded-xl overflow-hidden border border-[#2D2F36] backdrop-blur-xl bg-opacity-80">
          <div className="px-6 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-[#2D2F36] rounded w-3/4 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-[#2D2F36] rounded w-1/2"></div>
                <div className="h-4 bg-[#2D2F36] rounded w-3/4"></div>
                <div className="h-4 bg-[#2D2F36] rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CreateAgreementPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <CreateAgreementForm />
    </Suspense>
  );
} 