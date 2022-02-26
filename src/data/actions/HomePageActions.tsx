/* Services */
import SubmitCollaboratorInfoServices from "../../service/SubmitCollaboratorInfoService";

export const SUBMIT_COLLABORATOR_INFO_SERVICES =
  "SUBMIT_COLLABORATOR_INFO_SERVICES" as const;

export const SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED =
  "SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED" as const;

export const submitCollaboratorInfo = (email: string, detail: string) => ({
  type: SUBMIT_COLLABORATOR_INFO_SERVICES,
  payload: SubmitCollaboratorInfoServices(email, detail),
});
