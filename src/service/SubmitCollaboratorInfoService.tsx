import axios from "axios";

export default (async function SubmitCollaboratorInfo(
  collaboratorEmail: string,
  collaboratorDetail: string
): Promise<any> {
  await axios({
    method: "post",
    url: `daoki/collaborator/submit-info`,
    data: {
      description: collaboratorDetail,
      email: collaboratorEmail,
    },
  });
});
