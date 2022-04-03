import { useState } from "react";

/* Styled Components */
import {
  SectionWrapper,
  SectionTitleTopLine,
  SectionTitle,
  ContentCardWrapper,
  ContentCardTitleWrapper,
  ContentCardTitle,
  ContentCardBody,
  CardShadowCover,
  ContentWrapper,
  DotSquare,
  BottomCircle,
} from "../../styles/homePage/DAOkiDaoSection";

/* Child Components */
import ShieldIcon from "../common/icons/ShiedIcon";
import GiftIcon from "../common/icons/GiftIcon";
import BookShelfIcon from "../common/icons/BookShelfIcon";
import ThumbUpIcon from "../common/icons/ThumbUpIcon";

const DAOkiDaoSection = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <SectionWrapper>
      <SectionTitleTopLine />
      <SectionTitle>DAOki DAO</SectionTitle>
      <ContentWrapper>
        <DotSquare />
        <BottomCircle />
        <ContentCardWrapper>
          <ContentCardTitleWrapper>
            <ThumbUpIcon />
            <ContentCardTitle color="#FFA700">
              What is DAOki DAO？
            </ContentCardTitle>
          </ContentCardTitleWrapper>
          <ContentCardBody>
            To avoid the tragedy of commons happening in a lot of other DAOs, we
            do not have a treasury/common resources owned by the whole
            community. Everyone is responsible for their own
            information/knowledge entry in DAOki. Thus, we can enable the best
            utilization of resources and a cultivated environment for
            collaboration and competition.
          </ContentCardBody>
        </ContentCardWrapper>
        <ContentCardWrapper
          isCollapsed={isCollapsed}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ContentCardTitleWrapper>
            <BookShelfIcon />
            <ContentCardTitle color="#1D5ED7">
              How does the DAO in DAOki work?
            </ContentCardTitle>
          </ContentCardTitleWrapper>
          <ContentCardBody>
            <strong>
              There are three roles in DAOki DAO: Donor,Sower , Builder
            </strong>
          </ContentCardBody>
          <ContentCardBody>
            <strong>[Donor]</strong>People who donate for DAOki and get an
            exclusive NFT in return. They can specify their donation as the fund
            of tool-building, subDAO- creating, etc. The exclusive NFT will
            record donors' on-chain contributions and act as their
            credit/reputation references in DAOki.
          </ContentCardBody>
          <ContentCardBody>
            <strong>[Sower]</strong> People responsible for executions in DAOki.
            Sowers will be delegated by Donors and get corresponding subNFT.
            They distribute funds from donors for encouraging content creation
            and related work. subNFT will serve as their performance record for
            their future evaluations and supervision by donors.
          </ContentCardBody>
          <ContentCardBody>
            <strong>[Builder]</strong> Anyone who contributes to DAOki. Just
            like the other two roles, Builders will get their Builder NFT as
            their proof of contributions. Builders can either take tasks posted
            by Sowers or contribute in any way they like.
          </ContentCardBody>
          <ContentCardBody>
            All behaviors of anyone in DAOki will be recorded by NFT.
          </ContentCardBody>
          {isCollapsed && <CardShadowCover />}
        </ContentCardWrapper>
        <ContentCardWrapper>
          <ContentCardTitleWrapper>
            <GiftIcon />
            <ContentCardTitle color="#FFA700">
              How DAOki will be built from scratch
            </ContentCardTitle>
          </ContentCardTitleWrapper>
          <ContentCardBody>
            With the help of Donors and the contribution of the seed team, DAOki
            will work hard in rewarding content creation, including the funds
            and rare NFTs.
          </ContentCardBody>
        </ContentCardWrapper>
        <ContentCardWrapper>
          <ContentCardTitleWrapper>
            <ShieldIcon />
            <ContentCardTitle color="#1D5ED7">Fork DAOki!</ContentCardTitle>
          </ContentCardTitleWrapper>
          <ContentCardBody>
            All code of DAOki will be publicly available. Any suggestions will
            be welcomed. Any fork of our work will be encouraged, especially
            those ones whose suggestions are not taken by the DAOki seed team.
          </ContentCardBody>
        </ContentCardWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default DAOkiDaoSection;
