import styled from 'styled-components';
import MentorTime from '../mentor-card/MentorTime';

const Container = styled.div`
  display: grid;
  grid-template-columns: 25px auto 25px;
  grid-template-rows: 3.5rem 1.9rem 25rem 7rem 8rem auto auto auto 6rem;
`;

const Background = styled.div`
  background-color: white;
  z-index: -99;
  grid-area: 4 / 2 / 9 / 3;
  box-shadow: 0px 19px 20px -10px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const MentorTimeWrapper = styled.div`
  grid-area: 4 / 2 / 5 / 3;
  align-self: center;
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  grid-area: 1 / 1 / 2 / 4;
`;

const Job = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
  text-align: center;
  grid-area: 2 / 1 / 3 / 4;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  grid-area: 3 / 1 / 4 / 4;
`;

const Conduct = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: 5 / 2 / 6 / 3;
`;

const ConductTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: 700;
`;
const Logo = styled.div``;

const ExplainationWrapper = styled.div`
  grid-area: 6 / 2 / 7 / 3;
  padding: 0 1rem;
`;

const Explaination = styled.div``;

const ExplainationTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  flex: 100%;
`;

const ExplainationText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`;
const SvgDivider = styled.svg`
  max-width: 20rem;
  height: 2rem;
  flex: 100%;
  margin: 0 auto;
`;

const HelpFor = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-area: 7 / 2 / 8 / 3;
  padding: 0 1rem;
`;

const HelpForTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 2rem;
  flex: 100%;
  padding: 1rem 0;
`;

const HelpForSkill = styled.span`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.quaternary};
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  height: 3.6rem;
  justify-content: center;
  padding: 0.7rem;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: 8 / 2 / 9 / 3;
`;

const ContactTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  flex: 100%;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactItem = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 4rem;
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
    <Conduct>
      <ConductTitle>Son mentorat peut se dérouler</ConductTitle>
      <Logo>lol</Logo>
    </Conduct>
    <ExplainationWrapper>
      <Explaination>
        <ExplainationTitle>Présente toi en quelques mots ?</ExplainationTitle>
        <ExplainationText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore veritatis culpa hic?
          Quisquam animi, error quis sed facere dolor, asperiores accusantium culpa, aperiam
          eligendi quibusdam delectus aspernatur tempora commodi?
        </ExplainationText>
        <SvgDivider width="743" viewBox="0 0 743 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="224.145" height="10" rx="2.5" fill="#E31B84" />
          <rect x="257.352" width="224.145" height="10" rx="2.5" fill="#E31B84" />
          <rect x="518.855" width="224.145" height="10" rx="2.5" fill="#E31B84" />
        </SvgDivider>
      </Explaination>
      <Explaination>
        <ExplainationTitle>Présente toi en quelques mots ?</ExplainationTitle>
        <ExplainationText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore veritatis culpa hic?
          Quisquam animi, error quis sed facere dolor, asperiores accusantium culpa, aperiam
          eligendi quibusdam delectus aspernatur tempora commodi?
        </ExplainationText>
        <SvgDivider width="743" viewBox="0 0 743 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="224.145" height="10" rx="2.5" fill="#E31B84" />
          <rect x="257.352" width="224.145" height="10" rx="2.5" fill="#E31B84" />
          <rect x="518.855" width="224.145" height="10" rx="2.5" fill="#E31B84" />
        </SvgDivider>
      </Explaination>
      <Explaination>
        <ExplainationTitle>Présente toi en quelques mots ?</ExplainationTitle>
        <ExplainationText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore veritatis culpa hic?
          Quisquam animi, error quis sed facere dolor, asperiores accusantium culpa, aperiam
          eligendi quibusdam delectus aspernatur tempora commodi?
        </ExplainationText>
        <SvgDivider width="743" viewBox="0 0 743 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="224.145" height="10" rx="2.5" fill="#E31B84" />
          <rect x="257.352" width="224.145" height="10" rx="2.5" fill="#E31B84" />
          <rect x="518.855" width="224.145" height="10" rx="2.5" fill="#E31B84" />
        </SvgDivider>
      </Explaination>
      <Explaination>
        <ExplainationTitle>Présente toi en quelques mots ?</ExplainationTitle>
        <ExplainationText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore veritatis culpa hic?
          Quisquam animi, error quis sed facere dolor, asperiores accusantium culpa, aperiam
          eligendi quibusdam delectus aspernatur tempora commodi?
        </ExplainationText>
      </Explaination>
    </ExplainationWrapper>
    <HelpFor>
      <HelpForTitle>John Doe peut vous aider pour :</HelpForTitle>
      <HelpForSkill>Entretien</HelpForSkill>
      <SvgDivider width="743" viewBox="0 0 743 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="257.352" width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="518.855" width="224.145" height="10" rx="2.5" fill="#E31B84" />
      </SvgDivider>
    </HelpFor>

    <Contact>
      <ContactTitle>Contact</ContactTitle>
      <ContactItem>Linkedin: ajopaofapo.fr</ContactItem>
      <ContactItem>Linkedin: ajopaofapo.fr</ContactItem>
      <ContactItem>Linkedin: ajopaofapo.fr</ContactItem>
    </Contact>
  </Container>
);

export default MentorProfil;
