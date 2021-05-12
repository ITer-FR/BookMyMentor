import styled from 'styled-components';
import { MentorCardCollection } from '../../types/Collection';
import MentorQuality from './MentorQuality';
import MentorTime from './MentorTime';

const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.quaternary};
  border-radius: 30px 4px 30px 5px;
  box-shadow: 0px 19px 20px -10px rgba(0, 0, 0, 0.45);
  flex: 1/6;
  margin: 0 auto;
  margin-bottom: 10rem;
  height: 55rem;
  padding-bottom: 2rem;
  position: relative;
  width: 25rem;
  @media (min-width: 0px) and (max-width: 769px) {
    width: 100%;
    height: 45rem;
  }
  @media screen and (min-width: 768px) {
    flex-shrink: 0;
  }

  &:hover {
    transition: all 0.2s ease-out;
    top: -1rem;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    background: ${({ theme }) => theme.colors.secondary};
    height: 99.9%;
    width: 25rem;
    @media (min-width: 0px) and (max-width: 769px) {
      width: 100%;
      height: 45rem;
    }
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

const Mentor: React.FC<MentorCardCollection> = ({
  imageSource,
  name,
  job,
  text,
  time,
  stack,
  soft_skills,
}) => (
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
    <MentorQuality quality={stack} typeOfQuality={'Stack Teck'} />
    <MentorQuality quality={soft_skills} typeOfQuality={'Soft skills'} />
    <MentorTime time={time} />
  </Item>
);

export default Mentor;
