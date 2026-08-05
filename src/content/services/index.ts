import { workingVisa } from "./working-visa";
import { businessManager } from "./business-manager";
import { permanentResidence } from "./permanent-residence";
import { naturalization } from "./naturalization";
import { internationalMarriage } from "./international-marriage";
import { dependent } from "./dependent";
import { specialPermission } from "./special-permission";
import { employeeManagement } from "./employee-management";
import { translation } from "./translation";
import type { ServiceDetail } from "./types";

export const serviceDetails = [
  workingVisa,
  businessManager,
  permanentResidence,
  naturalization,
  internationalMarriage,
  dependent,
  specialPermission,
  employeeManagement,
  translation,
] as const satisfies readonly ServiceDetail[];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((service) => service.slug);
}

export {
  workingVisa,
  businessManager,
  permanentResidence,
  naturalization,
  internationalMarriage,
  dependent,
  specialPermission,
  employeeManagement,
  translation,
};
