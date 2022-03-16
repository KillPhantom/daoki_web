/* Styled Components */
import {
  SectionWrapper,
  SectionTitleTopLine,
  SectionTitle,
  ContentCardWrapper,
  ContentCardTitleWrapper,
  ContentCardTitle,
  ContentCardBody,
} from "../../styles/homePage/DAOkiDaoSection";

/* Child Components */
import ShieldIcon from "../common/icons/SheidIcon";
import GiftIcon from "../common/icons/GiftIcon";
import BookShelfIcon from "../common/icons/BookShelfIcon";
import ThumbUpIcon from "../common/icons/ThumbUpIcon";

const DAOkiDaoSection = () => {
  return (
    <SectionWrapper>
      <SectionTitleTopLine />
      <SectionTitle>DAOki DAO</SectionTitle>
      <ContentCardWrapper>
        <ContentCardTitleWrapper>
          <ThumbUpIcon />
          <ContentCardTitle color="#FFA700">
            What is DAOki DAO？
          </ContentCardTitle>
        </ContentCardTitleWrapper>
        <ContentCardBody>
          To avoid the tragedy of commons happening in a lot of other DAOs, we
          do not have a treasury/common resources owned by the whole community.
          Everyone is responsible for their own information/knowledge entry in
          DAOki. Thus, we can enable the best utilization of resources and a
          cultivated environment for collaboration and competition.
        </ContentCardBody>
      </ContentCardWrapper>

      <ContentCardWrapper>
        <ContentCardTitleWrapper>
          <ThumbUpIcon />
          <ContentCardTitle color="#FFA700">
            How DAOki will be built from scratch
          </ContentCardTitle>
        </ContentCardTitleWrapper>
        <ContentCardBody>
          With the help of Donors and the contribution of the seed team, DAOki
          will work hard in rewarding content creation, including the funds and
          rare NFTs.
        </ContentCardBody>
      </ContentCardWrapper>
      <ContentCardWrapper>
        <ContentCardTitleWrapper>
          <ThumbUpIcon />
          <ContentCardTitle color="#1D5ED7">Fork DAOki!</ContentCardTitle>
        </ContentCardTitleWrapper>
        <ContentCardBody>
          All code of DAOki will be publicly available. Any suggestions will be
          welcomed. Any fork of our work will be encouraged, especially those
          ones whose suggestions are not taken by the DAOki seed team.
        </ContentCardBody>
      </ContentCardWrapper>
      <ContentCardWrapper>
        <ContentCardTitleWrapper>
          <BookShelfIcon />
          <ContentCardTitle color="#1D5ED7">
            How does the DAO in DAOki work?
          </ContentCardTitle>
        </ContentCardTitleWrapper>
        <ContentCardBody>
          To avoid the tragedy of commons happening in a lot of other DAOs, we
          do not have a treasury/common resources owned by the whole community.
          Everyone is responsible for their own information/knowledge entry in
          DAOki. Thus, we can enable the best utilization of resources and a
          cultivated environment for collaboration and competition.
        </ContentCardBody>
        <ContentCardBody>
          To avoid the tragedy of commons happening in a lot of other DAOs, we
          do not have a treasury/common resources owned by the whole community.
          Everyone is responsible for their own information/knowledge entry in
          DAOki. Thus, we can enable the best utilization of resources and a
          cultivated environment for collaboration and competition.
        </ContentCardBody>
        <ContentCardBody>
          To avoid the tragedy of commons happening in a lot of other DAOs, we
          do not have a treasury/common resources owned by the whole community.
          Everyone is responsible for their own information/knowledge entry in
          DAOki. Thus, we can enable the best utilization of resources and a
          cultivated environment for collaboration and competition.
        </ContentCardBody>
      </ContentCardWrapper>
    </SectionWrapper>
  );
};

export default DAOkiDaoSection;
