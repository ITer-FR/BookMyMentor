import styled from 'styled-components';
import { MentorCardCollection } from '../types/Collection';

const SvgDivider = styled.svg`
  position: absolute;
  display: ${({ index }) => (index + 1 === 1 ? 'block' : 'none')};
  bottom: 10rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.quaternary};
  border-radius: 30px 4px 30px 5px;
  box-shadow: 0px 19px 20px -10px rgba(0, 0, 0, 0.45);
  flex: 1/6;
  margin: 0 auto;
  margin-bottom: 10rem;
  min-height: 460px;
  padding-bottom: 2rem;
  position: relative;
  width: 25rem;
  @media screen and (min-width: 768px) {
    flex-shrink: 0;
  }

  &:hover {
    transition: all 0.2s ease-out;
    top: -1rem;
    ${SvgDivider} & {
      top: 1rem;
    }
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    background: ${({ theme }) => theme.colors.secondary};
    height: 99.9%;
    width: 25rem;
    border-radius: 30px 4px 30px 5px;
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover::before {
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 30px 4px 0 0;
`;

const Name = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.quaternary};
  padding: 1rem;
  display: inline;
  border-radius: 50px;
  position: relative;
  top: -2rem;
`;

const Job = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
  margin-bottom: 3rem;
`;

const Description = styled.p`
  font-style: italic;
  margin-bottom: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const QualityWrapper = styled.div`
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

const TimeWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

const Time = styled.p`
  margin-left: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const SvgClock = styled.svg``;

const PathClock = styled.path`
  fill: ${({ theme }) => theme.colors.primary};
`;

const RectDivider = styled.rect``;

const Clock = () => (
  <SvgClock
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <PathClock d="M34.0223 28.2537C33.3645 27.7644 32.4347 27.901 31.9454 28.5587C31.6763 28.9204 31.3883 29.2752 31.0894 29.6133C30.5465 30.2275 30.6042 31.1656 31.2183 31.7086C31.5008 31.9582 31.8515 32.0809 32.2009 32.0809C32.6115 32.0809 33.0203 31.9114 33.3136 31.5796C33.6676 31.1792 34.0086 30.759 34.3273 30.3306C34.8166 29.6729 34.6801 28.7429 34.0223 28.2537Z" />
    <PathClock d="M36.5048 21.2923C35.7043 21.118 34.913 21.626 34.7387 22.427C34.6427 22.8676 34.5268 23.3091 34.3939 23.7392C34.1518 24.5225 34.5906 25.3537 35.3738 25.5957C35.5198 25.6407 35.6674 25.6622 35.8125 25.6622C36.4464 25.6622 37.0333 25.2529 37.2303 24.6155C37.3881 24.1051 37.5257 23.5812 37.6395 23.0584C37.8139 22.2575 37.3058 21.4667 36.5048 21.2923Z" />
    <PathClock d="M26.8775 33.0077C26.4834 33.2276 26.0753 33.4332 25.6648 33.6187C24.9176 33.9561 24.5855 34.8353 24.9229 35.5824C25.1708 36.1314 25.711 36.4562 26.2765 36.4562C26.4808 36.4562 26.6884 36.4138 26.8866 36.3243C27.3737 36.1044 27.8575 35.8605 28.3248 35.5997C29.0406 35.2001 29.2969 34.2958 28.8971 33.58C28.4976 32.8643 27.5933 32.6081 26.8775 33.0077Z" />
    <PathClock d="M17.5156 7.125V18.3852L12.0725 23.8282C11.4928 24.4079 11.4928 25.3478 12.0725 25.9274C12.3624 26.2173 12.7422 26.3622 13.1222 26.3622C13.502 26.3622 13.8819 26.2173 14.1718 25.9274L20.0497 20.0496C20.328 19.7713 20.4844 19.3937 20.4844 19V7.125C20.4844 6.30518 19.8198 5.64062 19 5.64062C18.1802 5.64062 17.5156 6.30518 17.5156 7.125Z" />
    <PathClock d="M36.5156 3.19141C35.6958 3.19141 35.0312 3.85596 35.0312 4.67578V8.79759C31.5762 3.37903 25.5425 0 19 0C13.9249 0 9.15362 1.97637 5.56492 5.56492C1.97637 9.15362 0 13.9249 0 19C0 24.0751 1.97637 28.8464 5.56492 32.4351C9.15362 36.0236 13.9249 38 19 38C19.0125 38 19.0246 37.9984 19.0371 37.9981C19.0496 37.9984 19.0617 38 19.0742 38C19.6092 38 20.1494 37.9774 20.6801 37.9331C21.497 37.8646 22.1038 37.1469 22.0355 36.33C21.967 35.5131 21.2502 34.906 20.4323 34.9747C19.9838 35.0122 19.5269 35.0312 19.0742 35.0312C19.0617 35.0312 19.0496 35.0328 19.0371 35.0331C19.0246 35.0328 19.0125 35.0312 19 35.0312C10.1603 35.0312 2.96875 27.8397 2.96875 19C2.96875 10.1603 10.1603 2.96875 19 2.96875C24.6969 2.96875 29.9367 6.00526 32.7999 10.8359H28.7184C27.8986 10.8359 27.2341 11.5005 27.2341 12.3203C27.2341 13.1401 27.8986 13.8047 28.7184 13.8047H33.25C34.154 13.8047 34.9997 13.5506 35.7198 13.1105C35.7661 13.0841 35.8106 13.0557 35.8531 13.025C37.1449 12.1751 38 10.7133 38 9.05469V4.67578C38 3.85596 37.3354 3.19141 36.5156 3.19141Z" />
  </SvgClock>
);

const Mentor: React.FC<MentorCardCollection> = ({ imageSource, name, job, text, time, index }) => (
  <>
    <Item>
      <Image
        className="Mentor__image"
        width="342px"
        height="227px"
        src={imageSource}
        alt={`${name} mentor`}
      />
      <Name className="Mentor__name">{name}</Name>
      <Job className="Mentor__job">{job}</Job>
      <Description className="Mentor__text">{text}</Description>
      <QualityWrapper>
        <QualityTitle>Stack tech:</QualityTitle>
        <QualityDescription>Javascript - Php - Html</QualityDescription>
      </QualityWrapper>
      <QualityWrapper>
        <QualityTitle>Soft Skills</QualityTitle>
        <QualityDescription>Entretien - Agilité - CV - Architecture</QualityDescription>
      </QualityWrapper>
      <TimeWrapper className="Mentor__time">
        <Clock />
        <Time>{time}</Time>
      </TimeWrapper>
    </Item>
    <SvgDivider
      width="743"
      height="5"
      viewBox="0 0 743 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      index={index}
    >
      <RectDivider width="224.145" height="5" rx="2.5" fill="#E31B84" />
      <RectDivider x="257.352" width="224.145" height="5" rx="2.5" fill="#E31B84" />
      <RectDivider x="518.855" width="224.145" height="5" rx="2.5" fill="#E31B84" />
    </SvgDivider>
  </>
);

export default Mentor;
