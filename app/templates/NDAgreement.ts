export interface NDAgreementParams {
  Client: string;
  Provider: string;
  ConfidentialInformation: string;
  StartDate: string;
  EndDate: string;
  ClientAddress: string;
  ProviderAddress: string;
  PermittedUse: string;
}

export const ND_AGREEMENT_TEMPLATE = `
# Non-Disclosure Agreement

This Non-Disclosure Agreement (the "Agreement") is made and entered into on [[Date: StartDate]] by and between:

[[Party Name: Provider]] ("Disclosing Party")
and
[[Party Name: Client]] ("Receiving Party")

## 1. CONFIDENTIAL INFORMATION
For the purposes of this Agreement, Confidential Information shall include:
[[Text: ConfidentialInformation]]

## 2. TERM
This Agreement shall commence on [[Date: StartDate]] and continue until [[Date: EndDate]], unless terminated earlier in accordance with this Agreement.

## 3. PERMITTED USE
The Receiving Party may use the Confidential Information only for:
[[Text: PermittedUse]]

## 4. SMART CONTRACT INTEGRATION
This agreement is integrated with blockchain technology through a smart contract that:
- Records the timestamp of information disclosure
- Tracks access to confidential information
- Verifies compliance with usage terms
- Provides immutable proof of agreement

## 5. OBLIGATIONS
The Receiving Party agrees to:
- Maintain the confidentiality of the information
- Not disclose the information to any third party
- Use the information only for the permitted purpose
- Return or destroy all confidential information upon request

## 6. BREACH
Any breach of this Agreement will be recorded on the blockchain and may trigger automatic penalties as defined in the smart contract.

## 7. SIGNATURES

Disclosing Party: [[Signature: Provider]]
Date: [[Date: StartDate]]
Ethereum Address: [[ETH Address: ProviderAddress]]

Receiving Party: [[Signature: Client]]
Date: [[Date: StartDate]]
Ethereum Address: [[ETH Address: ClientAddress]]
`;
