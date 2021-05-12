import styled from 'styled-components';
import { QualityMentorType } from '../../types/Collection';

type mentorQualityTypes = {
  typeOfQuality: string;
  quality: QualityMentorType[];
};

const QualityContainer = styled.div`
  @media (min-width: 0px) and (max-width: 769px) {
    display: none;
  }
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

const QualityTitle = styled.span`
  font-weight: 600;
`;

const QualityWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  height: 3.4rem;
`;

const Quality = styled.li`
  padding: 0 0.4rem;
  margin-right: 0.4rem;
  text-align: left;
  :not(:first-child) {
    list-style-type: '-';
  }
`;

const MentorQuality: React.FC<mentorQualityTypes> = ({ typeOfQuality, quality }) => (
  <QualityContainer>
    <QualityTitle>{typeOfQuality}</QualityTitle>
    <QualityWrapper>
      {quality && quality.map((data) => <Quality key={data['@id']}>{data.name}</Quality>)}
    </QualityWrapper>
  </QualityContainer>
);

export default MentorQuality;
