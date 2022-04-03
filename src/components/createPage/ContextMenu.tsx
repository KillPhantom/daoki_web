import { connect } from "react-redux";
import { StateType } from "../../data/types/StateType";
import {
  ModuleTitleWrapper,
  ModuleTitle,
  LeftColorBar,
  ModuleContextContainer,
  ContextTitle,
} from "../../styles/createPage/CreateProjectPage";

import { getCreatePageRichText } from "../../data/selectors/CreatePageSelectors";

const mapStateToProps = (state: StateType) => ({
  richTexts: getCreatePageRichText(state),
});

type OwnPropsType = {
  overrideRichTexts?: any;
};
type PropsType = ReturnType<typeof mapStateToProps> & OwnPropsType;

const ContextMenu = ({ richTexts, overrideRichTexts }: PropsType) => {
  const text = overrideRichTexts ?? richTexts;
  return (
    <ModuleContextContainer>
      <ModuleTitleWrapper>
        <LeftColorBar />
        <ModuleTitle>Context</ModuleTitle>
      </ModuleTitleWrapper>
      {text.map((item: any) => (
        <ContextTitle>
          <a href={`#content-${item?.id}`} style={{ color: "#142542" }}>
            {item?.title}
          </a>
        </ContextTitle>
      ))}
    </ModuleContextContainer>
  );
};

export default connect(mapStateToProps)(ContextMenu);
