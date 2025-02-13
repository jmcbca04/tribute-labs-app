'use client';

import { useState, useEffect } from 'react';
import { TemplateType, getFormFieldsByType } from '../templates/templateManager';

interface AgreementFormProps {
  onSubmit: (data: Record<string, string>) => void;
  templateType: TemplateType;
}

interface FormData {
  [key: string]: string;
}

const getInitialFormData = (templateType: TemplateType): FormData => {
  const fields = getFormFieldsByType(templateType);
  return fields.reduce((acc, field) => ({
    ...acc,
    [field]: ''
  }), {} as FormData);
};

export default function AgreementForm({ onSubmit, templateType }: AgreementFormProps) {
  const [formData, setFormData] = useState<FormData>(() => getInitialFormData(templateType));

  useEffect(() => {
    setFormData(getInitialFormData(templateType));
  }, [templateType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: Record<string, string>) => ({
      ...prev,
      [name]: value
    }));
  };

  const inputClasses = "mt-2 block w-full rounded-lg border-2 border-[#2D2F36] bg-[#0A0B0D] px-4 py-3 text-gray-300 shadow-sm transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-base placeholder-gray-500 hover:border-blue-300";
  const dateInputClasses = "mt-2 block w-full rounded-lg border-2 border-[#2D2F36] bg-[#0A0B0D] px-4 py-3 text-gray-300 shadow-sm transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-base placeholder-gray-500 hover:border-blue-300 [color-scheme:dark]";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-1";

  const renderField = (fieldName: string) => {
    const label = fieldName
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/^./, str => str.toUpperCase());

    if (fieldName === 'ServiceDescription' || fieldName === 'ConfidentialInformation' || fieldName === 'PermittedUse') {
      return (
        <div key={fieldName}>
          <label htmlFor={fieldName} className={labelClasses}>
            {label}
          </label>
          <textarea
            name={fieldName}
            id={fieldName}
            value={formData[fieldName] || ''}
            onChange={handleChange}
            rows={4}
            className={inputClasses}
            placeholder={getPlaceholder(fieldName)}
            required
          />
        </div>
      );
    }

    return (
      <div key={fieldName}>
        <label htmlFor={fieldName} className={labelClasses}>
          {label}
        </label>
        <input
          type={fieldName.includes('Date') ? 'date' : 'text'}
          name={fieldName}
          id={fieldName}
          value={formData[fieldName] || ''}
          onChange={handleChange}
          className={fieldName.includes('Date') ? dateInputClasses : inputClasses}
          placeholder={getPlaceholder(fieldName)}
          required
          min={fieldName === 'StartDate' ? new Date().toISOString().split('T')[0] : formData.StartDate}
          max={fieldName === 'StartDate' ? undefined : formData.StartDate ? new Date(new Date(formData.StartDate).getTime() + (10 * 365 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0] : undefined}
        />
      </div>
    );
  };

  const getPlaceholder = (fieldName: string) => {
    switch (fieldName) {
      case 'Client':
        return 'Enter client name';
      case 'Provider':
        return 'Enter provider name';
      case 'PaymentAmount':
        return '0.1 ETH';
      case 'ConsultingRate':
        return '0.05 ETH per hour';
      case 'ClientAddress':
      case 'ProviderAddress':
        return '0x...';
      case 'ServiceDescription':
        return 'Describe the services to be provided...';
      case 'ConfidentialInformation':
        return 'Define the confidential information covered by this agreement...';
      case 'PermittedUse':
        return 'Specify how the confidential information may be used...';
      case 'PaymentSchedule':
        return 'Specify the payment schedule (e.g., monthly, upon milestones)...';
      default:
        return '';
    }
  };

  const fields = getFormFieldsByType(templateType);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Section: Basic Information */}
      <div className="bg-[#1A1B21] rounded-xl p-6 space-y-6 border border-[#2D2F36]">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {fields.slice(0, 2).map(renderField)}
        </div>
        {fields.slice(2, 3).map(renderField)}
      </div>

      {/* Section: Terms and Payment */}
      <div className="bg-[#1A1B21] rounded-xl p-6 space-y-6 border border-[#2D2F36]">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">Terms and Payment</h2>
        <div className="grid grid-cols-1 gap-6">
          {fields.slice(3, 6).map(renderField)}
        </div>
      </div>

      {/* Section: Blockchain Details */}
      <div className="bg-[#1A1B21] rounded-xl p-6 space-y-6 border border-[#2D2F36]">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">Blockchain Details</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {fields.slice(6).map(renderField)}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-4 px-6 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
        >
          Generate Agreement
        </button>
      </div>
    </form>
  );
} 