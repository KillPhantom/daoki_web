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

type PropsType = ReturnType<typeof mapStateToProps>;

const ContextMenu = ({ richTexts }: PropsType) => {
  return (
    <ModuleContextContainer>
      <ModuleTitleWrapper>
        <LeftColorBar />
        <ModuleTitle>Context</ModuleTitle>
      </ModuleTitleWrapper>
      {richTexts.map((item) => (
        <ContextTitle>
          <a href={`#${item?.id}`} style={{ color: "#142542" }}>
            {item?.title}
          </a>
        </ContextTitle>
      ))}
    </ModuleContextContainer>
  );
};

export default connect(mapStateToProps)(ContextMenu);
