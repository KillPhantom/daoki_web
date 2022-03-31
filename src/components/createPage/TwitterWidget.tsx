import { useState, useRef, useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

import { TwitterWrapper } from "../../styles/createPage/CreateProjectPage";
import { Icon } from "../richText/Components";

type PropsType = {
  twitterId: string;
  onDelete: () => void;
};
const TwitterWidget = ({ twitterId, onDelete }: PropsType) => {
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [closeIconPosition, setCloseIconPosition] = useState(500);
  const embedRef = useRef(null);

  useEffect(() => {
    if (embedRef.current) {
      //@ts-ignore
      setCloseIconPosition(embedRef.current.offsetWidth);
    }
  }, [embedRef.current]);

  return (
    <TwitterWrapper
      onMouseEnter={() => setShowCloseIcon(true)}
      onMouseLeave={() => setShowCloseIcon(false)}
    >
      {showCloseIcon && (
        <Icon
          style={{
            position: "absolute",
            top: "4px",
            //@ts-ignore
            left: `${closeIconPosition + 50}`,
            zIndex: "1",
          }}
          onClick={onDelete}
        >
          close
        </Icon>
      )}
      <div ref={embedRef}>
        <TwitterTweetEmbed tweetId={twitterId} />
      </div>
    </TwitterWrapper>
  );
};

export default TwitterWidget;
