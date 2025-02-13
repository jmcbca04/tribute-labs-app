export const SERVICE_AGREEMENT_TEMPLATE = `
# Service Agreement

This Service Agreement (the "Agreement") is made and entered into on [[Date: StartDate]] by and between:

[[Party Name: Provider]] ("Provider")
and
[[Party Name: Client]] ("Client")

## 1. SERVICES
The Provider agrees to provide the following services to the Client:
[[Text: ServiceDescription]]

## 2. TERM
This Agreement shall commence on [[Date: StartDate]] and continue until [[Date: EndDate]], unless terminated earlier in accordance with this Agreement.

## 3. PAYMENT
The Client agrees to pay the Provider [[Amount: PaymentAmount]] for the services provided under this Agreement.

## 4. SMART CONTRACT INTEGRATION
This agreement is integrated with blockchain technology through a smart contract that automatically executes payment terms and tracks service delivery milestones.

[[Smart Contract: PaymentTerms
  Payment Amount: [[PaymentAmount]]
  Start Date: [[StartDate]]
  End Date: [[EndDate]]
]]

## 5. SIGNATURES

Client: [[Signature: Client]]
Date: [[Date: StartDate]]

Provider: [[Signature: Provider]]
Date: [[Date: StartDate]]

[[ETH Address: ClientAddress "Client's Ethereum Address"]]
[[ETH Address: ProviderAddress "Provider's Ethereum Address"]]
`;

export interface OpenLawTemplateVariables {
  Provider: string;
  Client: string;
  ServiceDescription: string;
  PaymentAmount: string;
  StartDate: string;
  EndDate: string;
  ClientAddress: string;
  ProviderAddress: string;
}
