export interface ConsultingAgreementParams {
  Client: string;
  Provider: string;
  ServiceDescription: string;
  PaymentAmount: string;
  StartDate: string;
  EndDate: string;
  ClientAddress: string;
  ProviderAddress: string;
  ConsultingRate: string;
  PaymentSchedule: string;
}

export const CONSULTING_AGREEMENT_TEMPLATE = `
# Consulting Agreement

This Consulting Agreement (the "Agreement") is made and entered into on [[Date: StartDate]] by and between:

[[Party Name: Provider]] ("Consultant")
and
[[Party Name: Client]] ("Client")

## 1. CONSULTING SERVICES
The Consultant agrees to provide the following consulting services to the Client:
[[Text: ServiceDescription]]

## 2. TERM
This Agreement shall commence on [[Date: StartDate]] and continue until [[Date: EndDate]], unless terminated earlier in accordance with this Agreement.

## 3. COMPENSATION
The Client agrees to pay the Consultant at a rate of [[Amount: ConsultingRate]] with the following payment schedule:
[[Text: PaymentSchedule]]

Total contract value: [[Amount: PaymentAmount]]

## 4. SMART CONTRACT INTEGRATION
This agreement is integrated with blockchain technology through a smart contract that automatically:
- Releases payments according to the specified schedule
- Tracks deliverables and milestones
- Verifies completion of consulting services

## 5. CONFIDENTIALITY
The Consultant agrees to maintain the confidentiality of any proprietary information received from the Client during the course of this engagement.

## 6. INTELLECTUAL PROPERTY
Any intellectual property developed during this engagement shall be owned by the Client unless otherwise specified in writing.

## 7. SIGNATURES

Client: [[Signature: Client]]
Date: [[Date: StartDate]]
Ethereum Address: [[ETH Address: ClientAddress]]

Consultant: [[Signature: Provider]]
Date: [[Date: StartDate]]
Ethereum Address: [[ETH Address: ProviderAddress]]
`;
