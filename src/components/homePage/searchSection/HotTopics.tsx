import { connect } from "react-redux";
import { useEffect } from "react";
import { getHotTopicsData } from "../../../data/selectors/HomePageSelectors";
import { StateType } from "../../../data/types/StateType";

/* Styled Components */
import {
  HotTopicsWrapper,
  HotTopicTitle,
  HotTopicLine,
  HotTopicCardWrapper,
  HotTopicCardTitle,
  PreviewInfoItem,
  ItemBulletPoint,
  PreviewInfoItemBody,
  PreviewInfoItemHeader,
  PreviewInfoItemHeaderTitle,
  HotTopicContentWrapper,
} from "../../../styles/homePage/SearchSection";

/* Child Components */
import ArrowIcon from "../../common/icons/ArrowIcon";
import FirstIcon from "../../common/icons/FirstIcon";
import SecondIcon from "../../common/icons/SecondIcon";
import ThirdIcon from "../../common/icons/ThirdIcon.";

/* Actions */
import { fetchHomePageInitialData } from "../../../data/actions/HomePageActions";

const mapStateToProps = (state: StateType) => ({
  hotTopics: getHotTopicsData(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchInitialData: () => dispatch(fetchHomePageInitialData),
});

type PropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const HotTopics = ({ hotTopics, fetchInitialData }: PropsType) => {
  useEffect(() => {
    fetchInitialData();
  }, []);

  console.log(">>>> hotopcis is ", hotTopics);
  const getBulletIcon = (position: number) => {
    switch (position) {
      case 0:
        return <FirstIcon />;
      case 1:
        return <SecondIcon />;
      case 2:
        return <ThirdIcon />;
      default:
        return <ItemBulletPoint />;
    }
  };

  return (
    <HotTopicsWrapper>
      <HotTopicTitle>Hot Topics</HotTopicTitle>
      <HotTopicLine />
      <HotTopicContentWrapper>
        {hotTopics?.map((item) => {
          return (
            item && (
              <HotTopicCardWrapper>
                <HotTopicCardTitle>{item.title}</HotTopicCardTitle>
                {item.data.map((info, index) => {
                  return (
                    <PreviewInfoItem>
                      <PreviewInfoItemHeader>
                        {getBulletIcon(index)}
                        <PreviewInfoItemHeaderTitle>
                          {info?.title}
                        </PreviewInfoItemHeaderTitle>
                        <ArrowIcon />
                      </PreviewInfoItemHeader>
                      <PreviewInfoItemBody>
                        {info?.description}
                      </PreviewInfoItemBody>
                    </PreviewInfoItem>
                  );
                })}
              </HotTopicCardWrapper>
            )
          );
        })}
      </HotTopicContentWrapper>
    </HotTopicsWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HotTopics);
