import axios from "axios";

export default (async function SubmitCollaboratorInfo(
  collaboratorEmail: string,
  collaboratorDetail: string
): Promise<any> {
  await axios({
    url: "/daoki/collaborator/submit-info",
    data: {
      description: collaboratorDetail,
      email: collaboratorEmail,
    },
    headers: {
      "Content-Type": "application/x-www.form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
  });
});
