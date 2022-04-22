import { TwitterTweetEmbed } from "react-twitter-embed";

import { TwitterWrapper } from "../../styles/createPage/CreateProjectPage";
import EditSideBarHOC from "../common/hoc/EditSideBarHOC";

type PropsType = {
  twitterId: string;
};
const TwitterWidget = ({ twitterId }: PropsType) => {
  return (
    <TwitterWrapper>
      <TwitterTweetEmbed tweetId={twitterId} />
    </TwitterWrapper>
  );
};

export default EditSideBarHOC(TwitterWidget);
