import styled from 'styled-components';
import MentorTime from '../MentorTime';
import MentorExplaination from './MentorExplaination';
import MentorHelpFor from './MentorHelpFor';
import MentorContact from './MentorContact';
import MentorExecution from './MentorExecution';

const Container = styled.div`
  display: grid;
  grid-template-columns: 25px auto 25px;
  grid-template-rows: 3.5rem 1.9rem 25rem 7rem 8rem auto auto auto 6rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 270px auto;
    grid-template-rows: 70px 50px 140px 100px 70px 100px auto auto;
    margin: 10rem 0;
  }
`;

const Background = styled.div`
  background-color: white;
  z-index: -99;
  grid-area: 4 / 2 / 9 / 3;
  box-shadow: 0px 19px 20px -10px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  @media screen and (min-width: 768px) {
    grid-area: 1 / 1 / 9 / 3;
  }
`;

const MentorTimeWrapper = styled.div`
  grid-area: 4 / 2 / 5 / 3;
  align-self: center;
  @media screen and (min-width: 768px) {
    grid-area: 5 / 1 / 6 / 2;
  }
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  grid-area: 1 / 1 / 2 / 4;
  justify-self: center;
  @media screen and (min-width: 768px) {
    grid-area: 1 / 2 / 2 / 3;
    height: 7rem;
    font-size: 6rem;
    width: fit-content;
    border-radius: 50px;
    padding: 1rem;
    background-color: white;
    margin-top: -30px;
  }
`;

const Job = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
  text-align: center;
  grid-area: 2 / 1 / 3 / 4;
  @media screen and (min-width: 768px) {
    grid-area: 2 / 2 / 3 / 3;
    font-size: 3rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  grid-area: 3 / 1 / 4 / 4;
  @media screen and (min-width: 768px) {
    grid-area: 1 / 1 / 4 / 2;
  }
`;

const MentorProfil = () => (
  <Container>
    <Background />
    <Name>Marc landers</Name>
    <Job>Développeur de choc.</Job>
    <Image src="https://cdn4.iconfinder.com/data/icons/profession-avatar-5/64/29-programmer-512.png" />
    <MentorTimeWrapper>
      <MentorTime time="long time" />
    </MentorTimeWrapper>
    <MentorExecution />
    <MentorExplaination />
    <MentorHelpFor />
    <MentorContact />
  </Container>
);

export default MentorProfil;
