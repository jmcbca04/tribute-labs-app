import { SERVICE_AGREEMENT_TEMPLATE } from "./ServiceAgreementTemplate";
import { CONSULTING_AGREEMENT_TEMPLATE } from "./ConsultingAgreement";
import { ND_AGREEMENT_TEMPLATE } from "./NDAgreement";

export type TemplateType = "service-agreement" | "consulting" | "nda";

export const getTemplateByType = (type: TemplateType): string => {
  switch (type) {
    case "service-agreement":
      return SERVICE_AGREEMENT_TEMPLATE;
    case "consulting":
      return CONSULTING_AGREEMENT_TEMPLATE;
    case "nda":
      return ND_AGREEMENT_TEMPLATE;
    default:
      return SERVICE_AGREEMENT_TEMPLATE; // Default to service agreement
  }
};

export const getFormFieldsByType = (type: TemplateType): string[] => {
  switch (type) {
    case "consulting":
      return [
        "Client",
        "Provider",
        "ServiceDescription",
        "PaymentAmount",
        "StartDate",
        "EndDate",
        "ClientAddress",
        "ProviderAddress",
        "ConsultingRate",
        "PaymentSchedule",
      ];
    case "nda":
      return [
        "Client",
        "Provider",
        "ConfidentialInformation",
        "StartDate",
        "EndDate",
        "ClientAddress",
        "ProviderAddress",
        "PermittedUse",
      ];
    case "service-agreement":
    default:
      return [
        "Client",
        "Provider",
        "ServiceDescription",
        "PaymentAmount",
        "StartDate",
        "EndDate",
        "ClientAddress",
        "ProviderAddress",
      ];
  }
};
