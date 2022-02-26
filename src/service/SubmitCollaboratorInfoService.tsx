import axios from "axios";

export default (async function SubmitCollaboratorInfo(
  collaboratorEmail: string,
  collaboratorDetail: string
): Promise<any> {
  await axios.post("/submit-collaborator-info", {
    collaborator_detail: collaboratorDetail,
    collaborator_email: collaboratorEmail,
  });
});
