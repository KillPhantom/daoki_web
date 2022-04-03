import { connect } from "react-redux";
import { getExternalLinks } from "../../data/selectors/CreatePageSelectors";
import { StateType } from "../../data/types/StateType";

/* Styled Components */
import {
  ExternalLinksWrapper,
  ModuleTitle,
  ModuleTitleWrapper,
  LeftColorBar,
  ExternalLinksTitleBottomLine,
  EmptySpaceHolder,
  ExternalLinkContentRow,
  ExternalLinkContentWrapper,
  ExternalLinkMainWrapper,
} from "../../styles/createPage/CreateProjectPage";

/* Child Components */
import ExternalLinkComponent from "./ExternalLinkComponent";

const mapStateToProps = (state: StateType) => ({
  externalLinks: getExternalLinks(state),
});

type OwnPropsType = {
  overrideExternalLinks?: any;
};
type PropsType = ReturnType<typeof mapStateToProps> & OwnPropsType;

const ExternalLinkSection = ({
  externalLinks,
  overrideExternalLinks,
}: PropsType) => {
  const getChunkArray = (array: Array<any>, size: number) =>
    array?.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(array.slice(i, i + size));
      return acc;
    }, []);
  const links = overrideExternalLinks ?? externalLinks;
  return (
    <ExternalLinkMainWrapper>
      <ExternalLinksWrapper>
        <ModuleTitleWrapper>
          <LeftColorBar />
          <ModuleTitle>External Links</ModuleTitle>
        </ModuleTitleWrapper>
        <ExternalLinkContentWrapper>
          {links &&
            getChunkArray(links, 3).map((chunk: any) => (
              <ExternalLinkContentRow>
                {chunk.map((item: any) => (
                  <ExternalLinkComponent
                    index={item.index}
                    url={item.url}
                    description={item.description}
                  />
                ))}
              </ExternalLinkContentRow>
            ))}
        </ExternalLinkContentWrapper>
      </ExternalLinksWrapper>
      <EmptySpaceHolder />
    </ExternalLinkMainWrapper>
  );
};
export default connect(mapStateToProps)(ExternalLinkSection);
