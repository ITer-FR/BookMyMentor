import styled from 'styled-components';

type mentorQualityTypes = {
  typeOfQuality: string;
  quality: string;
};

const QualityWrapper = styled.div`
  @media (min-width: 0px) and (max-width: 769px) {
    display: none;
  }
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin-bottom: 1.4rem;
  padding: 0 1rem;
`;

const QualityTitle = styled.span`
  font-weight: 600;
`;

const QualityDescription = styled.span``;

const MentorQuality: React.FC<mentorQualityTypes> = ({ typeOfQuality, quality }) => (
  <QualityWrapper>
    <QualityTitle>{typeOfQuality}</QualityTitle>
    <QualityDescription>{quality}</QualityDescription>
  </QualityWrapper>
);

export default MentorQuality;
