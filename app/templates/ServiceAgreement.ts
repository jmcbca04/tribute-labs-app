export interface ServiceAgreementParams {
  clientName: string;
  providerName: string;
  serviceDescription: string;
  paymentAmount: string;
  startDate: string;
  endDate: string;
}

export const generateServiceAgreement = (
  params: ServiceAgreementParams
): string => {
  const {
    clientName,
    providerName,
    serviceDescription,
    paymentAmount,
    startDate,
    endDate,
  } = params;

  return `
SERVICE AGREEMENT

This Service Agreement (the "Agreement") is made and entered into on ${startDate}, by and between:

${providerName} ("Provider")
and
${clientName} ("Client")

1. SERVICES
The Provider agrees to provide the following services to the Client:
${serviceDescription}

2. TERM
This Agreement shall commence on ${startDate} and continue until ${endDate}, unless terminated earlier in accordance with this Agreement.

3. PAYMENT
The Client agrees to pay the Provider ${paymentAmount} for the services provided under this Agreement.

4. SMART CONTRACT INTEGRATION
This agreement is integrated with blockchain technology through a smart contract that automatically executes payment terms and tracks service delivery milestones.

5. SIGNATURES

Client: ${clientName}
Date: ${startDate}

Provider: ${providerName}
Date: ${startDate}
`;
};
