import { connect } from "react-redux";
import { useEffect } from "react";
import { getRewardsListData } from "../../../data/selectors/HomePageSelectors";
import { StateType } from "../../../data/types/StateType";

/* Styled Components */
import {
  RewardListsWrapper,
  RewardListTitle,
  RewardListTitleBottomLine,
  ItemBulletPoint,
  PreviewInfoItemBody,
  PreviewInfoItemHeader,
  PreviewInfoItemHeaderTitle,
  PreviewInfoItem,
} from "../../../styles/homePage/SearchSection";

/* Child Components */
import ArrowIcon from "../../common/icons/ArrowIcon";
import FirstIcon from "../../common/icons/FirstIcon";
import SecondIcon from "../../common/icons/SecondIcon";
import ThirdIcon from "../../common/icons/ThirdIcon.";

/* Actions */
import { fetchHomePageInitialData } from "../../../data/actions/HomePageActions";

const mapStateToProps = (state: StateType) => ({
  rewardLists: getRewardsListData(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchInitialData: () => dispatch(fetchHomePageInitialData),
});

type PropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const RewardList = ({ rewardLists, fetchInitialData }: PropsType) => {
  useEffect(() => {
    fetchInitialData();
  }, []);

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
    <RewardListsWrapper>
      <RewardListTitle>Reward List</RewardListTitle>
      <RewardListTitleBottomLine />
      {rewardLists?.map((item, index) => {
        return (
          item && (
            <PreviewInfoItem>
              <PreviewInfoItemHeader>
                {getBulletIcon(index)}
                <PreviewInfoItemHeaderTitle>
                  {item.title}
                </PreviewInfoItemHeaderTitle>
                <ArrowIcon />
              </PreviewInfoItemHeader>
              <PreviewInfoItemBody>{item.description}</PreviewInfoItemBody>
            </PreviewInfoItem>
          )
        );
      })}
    </RewardListsWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardList);
