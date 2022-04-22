import { post } from "../utils/API";

export default (async function SubmitCollaboratorInfo(
  collaboratorEmail: string,
  collaboratorDetail: string
): Promise<any> {
  await post("/collaborator/submit-info", {
    description: collaboratorDetail,
    email: collaboratorEmail,
  });
});
