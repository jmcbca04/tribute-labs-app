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

  const inputClasses = "mt-2 block w-full rounded-xl border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base";
  const labelClasses = "block text-sm font-semibold text-gray-900 mb-1";

  const renderField = (fieldName: string) => {
    const label = fieldName
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .trim()
      .replace(/^./, str => str.toUpperCase()); // Capitalize first letter

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
          className={inputClasses}
          placeholder={getPlaceholder(fieldName)}
          required
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
      <div className="bg-gray-50 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {fields.slice(0, 2).map(renderField)}
        </div>
        {fields.slice(2, 3).map(renderField)}
      </div>

      {/* Section: Terms and Payment */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Terms and Payment</h2>
        <div className="grid grid-cols-1 gap-6">
          {fields.slice(3, 6).map(renderField)}
        </div>
      </div>

      {/* Section: Blockchain Details */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Blockchain Details</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {fields.slice(6).map(renderField)}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-4 px-6 border border-transparent rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Generate Agreement
        </button>
      </div>
    </form>
  );
} 